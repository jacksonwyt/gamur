import { Test, TestingModule } from '@nestjs/testing';
import { HabitService } from './habit.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { HabitDefinition } from '@prisma/client';

const mockPrismaService = {
  habitDefinition: {
    create: jest.fn(),
    findMany: jest.fn(),
    findUnique: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

describe('HabitService', () => {
  let service: HabitService;
  let prisma: typeof mockPrismaService;

  const createMockHabit = (
    overrides: Partial<HabitDefinition> = {},
  ): HabitDefinition => ({
    id: 1,
    userId: 101,
    name: 'Test Habit',
    frequency: 'daily',
    description: null,
    target: 1,
    currentStreak: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HabitService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<HabitService>(HabitService);
    prisma = module.get(PrismaService);
    jest.clearAllMocks();
  });

  describe('create', () => {
    it('creates a new habit', async () => {
      const userId = 123;
      const createHabitDto: CreateHabitDto = {
        name: 'Test Habit',
        frequency: 'daily',
        description: 'A test habit',
        target: 1,
      };
      const expectedHabit = createMockHabit({
        id: 456,
        userId,
        ...createHabitDto,
      });
      prisma.habitDefinition.create.mockResolvedValue(expectedHabit);
      const result = await service.create(createHabitDto, userId);
      expect(result).toEqual(expectedHabit);
    });
  });

  describe('findAll', () => {
    it('returns habits for a user', async () => {
      const userId = 123;
      const expectedHabits = [
        createMockHabit(),
        createMockHabit({
          id: 2,
          name: 'Habit 2',
          frequency: 'weekly',
          target: 3,
        }),
      ];
      prisma.habitDefinition.findMany.mockResolvedValue(expectedHabits);
      const result = await service.findAll(userId);
      expect(result).toEqual(expectedHabits);
    });

    it('returns empty array if no habits', async () => {
      const userId = 404;
      prisma.habitDefinition.findMany.mockResolvedValue([]);
      const result = await service.findAll(userId);
      expect(result).toEqual([]);
    });
  });

  describe('findOne', () => {
    const habitId = 123;
    const userId = 101;
    const mockHabit = createMockHabit();

    it('returns habit if found and belongs to user', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue(mockHabit);
      const result = await service.findOne(habitId, userId);
      expect(result).toEqual(mockHabit);
    });

    it('throws NotFoundException if habit not found', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue(null);
      await expect(service.findOne(habitId, userId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('throws ForbiddenException if habit does not belong to user', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue({
        ...mockHabit,
        userId: 202,
      });
      await expect(service.findOne(habitId, userId)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });

  describe('update', () => {
    const habitId = 99;
    const userId = 88;
    const updateHabitDto: UpdateHabitDto = { name: 'Updated Habit Name' };
    const originalHabit = createMockHabit({ id: habitId, userId });
    const updatedHabit = { ...originalHabit, ...updateHabitDto };

    it('updates habit if found and belongs to user', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue(originalHabit);
      prisma.habitDefinition.update.mockResolvedValue(updatedHabit);
      const result = await service.update(habitId, userId, updateHabitDto);
      expect(result).toEqual(updatedHabit);
    });

    it('throws NotFoundException if habit not found', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue(null);
      await expect(
        service.update(habitId, userId, updateHabitDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('throws ForbiddenException if habit does not belong to user', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue({
        ...originalHabit,
        userId: 77,
      });
      await expect(
        service.update(habitId, userId, updateHabitDto),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('remove', () => {
    const habitId = 55;
    const userId = 44;
    const habitToRemove = createMockHabit({ id: habitId, userId });

    it('removes habit if found and belongs to user', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue(habitToRemove);
      prisma.habitDefinition.delete.mockResolvedValue(habitToRemove);
      const result = await service.remove(habitId, userId);
      expect(result).toEqual(habitToRemove);
    });

    it('throws NotFoundException if habit not found', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue(null);
      await expect(service.remove(habitId, userId)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('throws ForbiddenException if habit does not belong to user', async () => {
      prisma.habitDefinition.findUnique.mockResolvedValue({
        ...habitToRemove,
        userId: 33,
      });
      await expect(service.remove(habitId, userId)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });
});
