import { Injectable, NotFoundException } from '@nestjs/common';
import { Profile } from '../../generated/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async getUserProfile(userIdString: string): Promise<Profile | null> {
    const userId = parseInt(userIdString, 10);
    if (isNaN(userId)) {
      throw new NotFoundException('Invalid user ID format.');
    }
    let profile = await this.prisma.profile.findUnique({
      where: { userId },
    });

    if (!profile) {
      // If profile doesn't exist, create a basic one for the user
      // This is often good practice to ensure a user always has a profile record
      try {
        profile = await this.prisma.profile.create({
          data: {
            userId: userId,
            // Initialize other default fields for Profile if necessary
            // e.g., username: derived from email or a default, currentLevel: 1, currentXP: 0
          },
        });
      } catch (error) {
        // Handle potential error during profile creation, e.g., if user somehow doesn't exist
        // This part depends on how strictly you want to enforce User existence before Profile creation
        console.error('Error creating profile for user:', userId, error);
        // Optionally re-throw or return null/throw NotFoundException
        throw new NotFoundException(
          `Profile not found and could not be created for user ID: ${userId}`,
        );
      }
    }
    return profile;
  }

  async updateUserProfile(
    userIdString: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<Profile> {
    const userId = parseInt(userIdString, 10);
    if (isNaN(userId)) {
      throw new NotFoundException('Invalid user ID format.');
    }
    try {
      return await this.prisma.profile.update({
        where: { userId },
        data: updateProfileDto,
      });
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        // P2025 is "Record to update not found"
        throw new NotFoundException(
          `Profile not found for user ID: ${userId}, cannot update.`,
        );
      }
      // Re-throw other errors
      throw error;
    }
  }
}
