import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UseGuards,
  Req,
  Patch,
  HttpCode,
  HttpStatus,
  Delete,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { HabitService } from './habit.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { HabitDefinition, HabitLog } from '../../generated/prisma';

@UseGuards(JwtAuthGuard)
@Controller('habits')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createHabitDto: CreateHabitDto,
    @Req() req: any,
  ): Promise<HabitDefinition> {
    const userId = req.user.userId;
    return await this.habitService.create(createHabitDto, userId);
  }

  @Get()
  async findAll(@Req() req: any): Promise<HabitDefinition[]> {
    const userIdString = req.user.userId;
    const userId = parseInt(userIdString, 10);

    if (isNaN(userId)) {
      throw new BadRequestException('User ID is invalid.');
    }
    return await this.habitService.findAll(userId);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any,
  ): Promise<HabitDefinition> {
    const userId = req.user.userId;
    return await this.habitService.findOne(id, userId);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateHabitDto: UpdateHabitDto,
    @Req() req: any,
  ): Promise<HabitDefinition> {
    const userId = req.user.userId;
    return await this.habitService.update(id, userId, updateHabitDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: any,
  ): Promise<HabitDefinition> {
    const userId = req.user.userId;
    return await this.habitService.remove(id, userId);
  }

  @Post(':id/log')
  @HttpCode(HttpStatus.CREATED)
  async logHabitCompletion(
    @Param('id', ParseIntPipe) habitId: number,
    @Req() req: any,
    @Body() body?: { completionDate?: string; notes?: string },
  ): Promise<HabitLog> {
    const userId = req.user.userId;
    const completionDate = body?.completionDate
      ? new Date(body.completionDate)
      : new Date();
    const notes = body?.notes;

    return await this.habitService.logHabitCompletion(
      userId,
      habitId,
      completionDate,
      notes,
    );
  }

  @Get(':habitId/logs')
  async getHabitLogs(
    @Param('habitId', ParseIntPipe) habitId: number,
    @Req() req: any,
  ): Promise<HabitLog[]> {
    const userId = req.user.userId;
    return await this.habitService.getHabitLogs(userId, habitId);
  }

  // logCompletion, getLogs endpoints will be added later
}
