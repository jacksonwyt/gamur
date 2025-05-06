import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { HabitDefinition, HabitLog } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitService {
  constructor(private readonly prisma: PrismaService) {}

  // Helper method to check if two Date objects represent the same calendar day
  private isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  private async calculateAndUpdateStreak(
    habitDefinitionId: number,
    userId: number,
  ): Promise<void> {
    const habitDefinition = await this.prisma.habitDefinition.findUnique({
      where: { id: habitDefinitionId },
    });

    if (!habitDefinition) {
      console.error(
        `Habit definition ${habitDefinitionId} not found during streak calculation.`,
      );
      return;
    }
    if (habitDefinition.userId !== userId) {
      console.error(
        `User ${userId} not authorized for habit ${habitDefinitionId} during streak calculation.`,
      );
      return;
    }

    const logs = await this.prisma.habitLog.findMany({
      where: {
        habitId: habitDefinitionId,
        userId: userId,
      },
      orderBy: {
        completionDate: 'desc',
      },
      select: {
        completionDate: true,
      },
    });

    if (logs.length === 0) {
      await this.prisma.habitDefinition.update({
        where: { id: habitDefinitionId },
        data: { currentStreak: 0 },
      });
      return;
    }

    const uniqueLogDates: Date[] = [];
    const seenDateKeys = new Set<string>();
    for (const log of logs) {
      const dateKey = `${log.completionDate.getFullYear()}-${log.completionDate.getMonth()}-${log.completionDate.getDate()}`;
      if (!seenDateKeys.has(dateKey)) {
        uniqueLogDates.push(log.completionDate);
        seenDateKeys.add(dateKey);
      }
    }
    // uniqueLogDates are sorted descending by date, containing unique calendar days

    let calculatedStreak = 0;
    if (uniqueLogDates.length > 0) {
      calculatedStreak = 1; // Start with 1 for the most recent log day

      if (habitDefinition.frequency === 'DAILY') {
        for (let i = 0; i < uniqueLogDates.length - 1; i++) {
          const currentLogDay = uniqueLogDates[i];
          const previousLogDayCandidate = uniqueLogDates[i + 1];

          const expectedPreviousDay = new Date(currentLogDay);
          expectedPreviousDay.setDate(currentLogDay.getDate() - 1);

          if (this.isSameDay(previousLogDayCandidate, expectedPreviousDay)) {
            calculatedStreak++;
          } else {
            break; // Streak broken
          }
        }
      } else {
        // For non-DAILY habits (e.g., WEEKLY), if there's any log, streak is 1.
        // This is a placeholder and can be expanded with specific logic for weekly streaks.
        calculatedStreak = 1;
      }
    }

    await this.prisma.habitDefinition.update({
      where: { id: habitDefinitionId },
      data: { currentStreak: calculatedStreak },
    });
  }

  async create(
    createHabitDto: CreateHabitDto,
    userId: number,
  ): Promise<HabitDefinition> {
    return this.prisma.habitDefinition.create({
      data: {
        ...createHabitDto,
        userId,
      },
    });
  }

  async findAll(userId: number): Promise<HabitDefinition[]> {
    return this.prisma.habitDefinition.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number, userId: number): Promise<HabitDefinition> {
    const habit = await this.prisma.habitDefinition.findFirst({
      where: { id, userId },
    });
    if (!habit) {
      throw new NotFoundException(
        `Habit with ID "${id}" not found for this user.`,
      );
    }
    return habit;
  }

  async getHabitLogsForUserAndDate(
    userId: number,
    habitId: number,
    date: Date,
  ): Promise<HabitLog[]> {
    const startDate = new Date(date);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setHours(23, 59, 59, 999);

    return this.prisma.habitLog.findMany({
      where: {
        userId: userId,
        habitId: habitId,
        completionDate: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }

  async update(
    id: number,
    userId: number,
    updateHabitDto: UpdateHabitDto,
  ): Promise<HabitDefinition> {
    const habit = await this.prisma.habitDefinition.findFirst({
      where: { id, userId },
    });

    if (!habit) {
      throw new NotFoundException(
        `Habit with ID "${id}" not found or you don't have permission to update it.`,
      );
    }

    return this.prisma.habitDefinition.update({
      where: { id },
      data: updateHabitDto,
    });
  }

  async remove(id: number, userId: number): Promise<HabitDefinition> {
    const habit = await this.prisma.habitDefinition.findFirst({
      where: { id, userId },
    });

    if (!habit) {
      throw new NotFoundException(
        `Habit with ID "${id}" not found or you don't have permission to delete it.`,
      );
    }

    // Related HabitLog entries should be handled by onDelete: Cascade in Prisma schema if configured.
    // Otherwise, delete them manually first:
    // await this.prisma.habitLog.deleteMany({ where: { habitId: id, userId }});

    return this.prisma.habitDefinition.delete({
      where: { id },
    });
  }

  async logHabitCompletion(
    userId: number,
    habitId: number,
    completionDate: Date,
    notes?: string,
  ): Promise<HabitLog> {
    // Check if the habit definition exists and belongs to the user
    const habitDefinition = await this.prisma.habitDefinition.findUnique({
      where: { id: habitId },
    });

    if (!habitDefinition) {
      throw new NotFoundException(`Habit with ID ${habitId} not found.`);
    }
    if (habitDefinition.userId !== userId) {
      throw new ForbiddenException(
        'You are not authorized to log completion for this habit.',
      );
    }

    // Check for existing log if frequency dictates (e.g., daily)
    if (habitDefinition.frequency === 'daily') {
      const todayLog = await this.findHabitLog(userId, habitId, completionDate);
      if (todayLog) {
        // Or throw ConflictException
        return todayLog;
      }
    }

    // Log the habit completion
    const newLog = await this.prisma.habitLog.create({
      data: {
        habitId,
        userId,
        completionDate: new Date(completionDate), // Ensure it is a Date object
        notes,
      },
    });

    // Simplified streak update
    // For robust streak logic, it needs to check continuity based on logs and frequency
    try {
      await this.prisma.habitDefinition.update({
        where: { id: habitId },
        data: {
          currentStreak: { increment: 1 },
        },
      });
    } catch (e) {
      // Log error if streak update fails, but don't let it fail the log completion.
      console.error('Failed to update streak', e);
    }

    return newLog;
  }

  async findHabitLog(
    userId: number,
    habitId: number,
    date: Date,
  ): Promise<HabitLog | null> {
    const startDate = new Date(date);
    startDate.setUTCHours(0, 0, 0, 0);
    const endDate = new Date(date);
    endDate.setUTCHours(23, 59, 59, 999);

    return this.prisma.habitLog.findFirst({
      where: {
        userId: userId,
        habitId: habitId,
        completionDate: {
          gte: startDate,
          lte: endDate,
        },
      },
    });
  }

  async getHabitLogs(userId: number, habitId: number): Promise<HabitLog[]> {
    // First, verify the HabitDefinition exists and belongs to the user
    const habitDefinition = await this.prisma.habitDefinition.findUnique({
      where: { id: habitId },
    });

    if (!habitDefinition) {
      throw new NotFoundException(
        `Habit definition with ID ${habitId} not found.`,
      );
    }
    if (habitDefinition.userId !== userId) {
      throw new ForbiddenException(
        'You are not authorized to view logs for this habit.',
      );
    }

    return this.prisma.habitLog.findMany({
      where: {
        habitId: habitId,
        userId: userId, // Ensure logs are also for the same user
      },
      orderBy: {
        completionDate: 'desc',
      },
    });
  }

  async getHabitLogById(
    userId: number,
    logId: number,
  ): Promise<HabitLog | null> {
    const habitLog = await this.prisma.habitLog.findUnique({
      where: { id: logId },
    });

    if (!habitLog) {
      throw new NotFoundException(`Habit log with ID ${logId} not found.`);
    }

    // Verify that the log belongs to the requesting user
    if (habitLog.userId !== userId) {
      throw new ForbiddenException(
        'You are not authorized to view this habit log.',
      );
    }
    return habitLog;
  }

  async deleteHabitLog(userId: number, logId: number): Promise<HabitLog> {
    const habitLog = await this.prisma.habitLog.findUnique({
      where: { id: logId },
    });

    if (!habitLog) {
      throw new NotFoundException(`Habit log with ID ${logId} not found.`);
    }
    if (habitLog.userId !== userId) {
      throw new ForbiddenException(
        'You are not authorized to delete this habit log.',
      );
    }

    try {
      return await this.prisma.habitLog.delete({
        where: { id: logId },
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(
          `Habit log with ID ${logId} not found, cannot delete.`,
        );
      }
      throw error;
    }
  }

  // Add method to calculate/update streak based on logs
  // This would be more complex, checking for consecutive days based on frequency
}
