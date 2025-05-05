import { Controller, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { JwtAuthGuard } from '../jwt-auth.guard'; // Corrected path assuming guard is in src/
import { UpdateProfileDto } from './dto/update-profile.dto'; // We will create this DTO next

// Define an interface for the expected user object shape attached by the guard
interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
    email: string;
  };
}

@Controller('profile')
@UseGuards(JwtAuthGuard) // Protect all routes in this controller
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('me')
  getProfile(@Request() req: AuthenticatedRequest) {
    // The user object is attached to the request by JwtAuthGuard/JwtStrategy
    const userId = req.user.userId;
    return this.profileService.getUserProfile(userId);
  }

  // We'll add the PUT endpoint after creating the DTO

  @Put('me')
  updateProfile(
    @Request() req: AuthenticatedRequest,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    const userId = req.user.userId;
    return this.profileService.updateUserProfile(userId, updateProfileDto);
  }
} 