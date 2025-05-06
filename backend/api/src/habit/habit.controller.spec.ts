import { Test, TestingModule } from '@nestjs/testing';
import { HabitController } from './habit.controller';
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { JwtAuthGuard } from '../jwt-auth.guard';

// Mock HabitService
const mockHabitService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

// Mock JwtAuthGuard - typically allow access
const mockJwtAuthGuard = {
  canActivate: jest.fn(() => true),
};

describe('HabitController', () => {
  let controller: HabitController;
  let service: typeof mockHabitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HabitController],
      providers: [
        {
          provide: HabitService,
          useValue: mockHabitService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(mockJwtAuthGuard) // Override the guard for all tests in this suite
      .compile();

    controller = module.get<HabitController>(HabitController);
    service = module.get(HabitService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call habitService.create and return the result', async () => {
      const userId = 1;
      const createHabitDto: CreateHabitDto = {
        name: 'Controller Habit',
        frequency: 'daily',
      };
      const mockReq = { user: { userId } };
      const expectedResult = {
        id: '1',
        ...createHabitDto,
        userId,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      service.create.mockResolvedValue(expectedResult as any);

      const result = await controller.create(createHabitDto, mockReq);
      expect(service.create).toHaveBeenCalledWith(createHabitDto, userId);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findAll', () => {
    it('should call habitService.findAll and return the result', async () => {
      const userId = 2;
      const mockReq = { user: { userId } };
      const expectedResult = [
        {
          id: '1',
          name: 'Habit1',
          userId,
          frequency: 'daily',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      service.findAll.mockResolvedValue(expectedResult as any);

      const result = await controller.findAll(mockReq);
      expect(service.findAll).toHaveBeenCalledWith(userId);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should call habitService.findOne and return the result', async () => {
      const userId = 3;
      const habitId = 101;
      const mockReq = { user: { userId } };
      const expectedResult = {
        id: habitId,
        name: 'Habit Found',
        userId,
        frequency: 'weekly',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      service.findOne.mockResolvedValue(expectedResult as any);

      const result = await controller.findOne(habitId, mockReq);
      expect(service.findOne).toHaveBeenCalledWith(habitId, userId);
      expect(result).toEqual(expectedResult);
    });
  });

  describe('update', () => {
    it('should call habitService.update and return the result', async () => {
      const userId = 4;
      const habitId = 102;
      const updateHabitDto: UpdateHabitDto = {
        description: 'Updated description',
      };
      const mockReq = { user: { userId } };
      const expectedResult = {
        id: habitId,
        name: 'Original Name',
        userId,
        frequency: 'daily',
        ...updateHabitDto,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      service.update.mockResolvedValue(expectedResult as any);

      const result = await controller.update(habitId, updateHabitDto, mockReq);
      expect(service.update).toHaveBeenCalledWith(
        habitId,
        userId,
        updateHabitDto,
      );
      expect(result).toEqual(expectedResult);
    });
  });

  describe('remove', () => {
    it('should call habitService.remove and return the result', async () => {
      const userId = 5;
      const habitId = 103;
      const mockReq = { user: { userId } };
      const expectedResult = {
        id: habitId,
        name: 'Habit To Remove',
        userId,
        frequency: 'monthly',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      service.remove.mockResolvedValue(expectedResult as any);

      const result = await controller.remove(habitId, mockReq);
      expect(service.remove).toHaveBeenCalledWith(habitId, userId);
      expect(result).toEqual(expectedResult);
    });
  });
});
