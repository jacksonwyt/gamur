import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateHealthLogDto } from './dto/create-health-log.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Assuming JWT authentication
import { GetCurrentUser } from '../common/decorators/auth.decorators'; // Corrected import

@Controller('health')
@UseGuards(JwtAuthGuard) // Apply JWT guard to all routes in this controller
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Post('log/manual')
  async createManualLog(
    @Body() createHealthLogDto: CreateHealthLogDto,
    @GetCurrentUser('userId') userId: string, // Corrected usage
  ) {
    // Basic implementation placeholder
    return this.healthService.createManualLog(userId, createHealthLogDto);
  }

  @Get('logs')
  async getHealthLogs(@GetCurrentUser('userId') userId: string) {
    // Corrected usage
    // Basic implementation placeholder
    return this.healthService.getHealthLogs(userId);
  }
}
