import { Module } from '@nestjs/common';
import { HabitController } from './habit.controller';
import { HabitService } from './habit.service';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust path if necessary

@Module({
  imports: [PrismaModule],
  controllers: [HabitController],
  providers: [HabitService],
})
export class HabitModule {}
