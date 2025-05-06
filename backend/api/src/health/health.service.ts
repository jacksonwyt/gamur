import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming Prisma for database interaction
import { CreateHealthLogDto } from './dto/create-health-log.dto';
import { HealthDataSource, HealthLog } from '@prisma/client'; // Import Prisma-generated types

@Injectable()
export class HealthService {
  private readonly logger = new Logger(HealthService.name);

  constructor(private readonly prisma: PrismaService) {}

  async createManualLog(
    userId: string,
    createHealthLogDto: CreateHealthLogDto,
  ): Promise<HealthLog[]> {
    const { date, metrics } = createHealthLogDto;
    const createdLogs: HealthLog[] = [];

    for (const metric of metrics) {
      try {
        const newLog = await this.prisma.healthLog.create({
          data: {
            userId: parseInt(userId, 10), // Ensure userId is an integer if your schema expects it
            date: new Date(date), // Convert ISO string to Date object
            metricType: metric.metricType, // Assumes HealthMetricTypeDto matches Prisma's HealthMetricType
            value: metric.value,
            source: HealthDataSource.MANUAL,
          },
        });
        createdLogs.push(newLog);
      } catch (error) {
        if (error instanceof Error) {
          this.logger.error(
            `Failed to create manual health log for user ${userId}, metric ${metric.metricType}: ${error.message}`,
            error.stack,
          );
        } else {
          this.logger.error(
            `Failed to create manual health log for user ${userId}, metric ${metric.metricType}: An unknown error occurred`,
          );
        }
        // Decide on error handling: throw, or collect errors and return partial success?
        // For now, we'll let it throw if one fails, or adjust to collect errors.
        throw error; // Re-throw or handle more gracefully
      }
    }
    this.logger.log(
      `Successfully created ${createdLogs.length} manual health log(s) for user ${userId} on ${date}`,
    );
    return createdLogs;
  }

  async getHealthLogs(userId: string): Promise<HealthLog[]> {
    this.logger.log(`Fetching health logs for user ${userId}`);
    return this.prisma.healthLog.findMany({
      where: {
        userId: parseInt(userId, 10),
      },
      orderBy: {
        date: 'desc',
      },
    });
  }
}
