import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { PrismaModule } from '../prisma/prisma.module'; // Assuming you'll need Prisma

@Module({
  imports: [PrismaModule], // Import PrismaModule if you plan to interact with the database
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
