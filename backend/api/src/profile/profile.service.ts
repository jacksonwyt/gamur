import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming prisma service path
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from '@prisma/client'; // Import Profile type if needed for return types

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  // Method to get user profile
  async getUserProfile(userId: string): Promise<Profile> { // Return type Profile
    try {
      // Fetch from the profile table using userId
      const profile = await this.prisma.profile.findUniqueOrThrow({
        where: { userId: userId },
        // Select profile-specific fields
        // select: { // Optional: Explicitly select fields if needed
        //   id: true,
        //   userId: true,
        //   username: true,
        //   currentLevel: true,
        //   currentXP: true,
        //   xpToNextLevel: true,
        //   createdAt: true,
        //   updatedAt: true,
        // },
      });
      return profile;
    } catch (error) {
      // Prisma's findUniqueOrThrow throws an error if not found
      throw new NotFoundException(`Profile for user ID "${userId}" not found`);
    }
  }

  // Method to update user profile
  async updateUserProfile(userId: string, data: UpdateProfileDto): Promise<Profile> { // Return type Profile
    try {
      // Update the profile table using userId
      const updatedProfile = await this.prisma.profile.update({
        where: { userId: userId },
        data: data, // Pass the corrected DTO
        // Select profile-specific fields after update
        // select: { // Optional: Explicitly select fields if needed
        //   id: true,
        //   userId: true,
        //   username: true,
        //   currentLevel: true,
        //   currentXP: true,
        //   xpToNextLevel: true,
        //   createdAt: true,
        //   updatedAt: true,
        // },
      });
      return updatedProfile;
    } catch (error) {
      // Handle potential errors, e.g., if the profile somehow doesn't exist
      // Prisma might throw specific errors (e.g., P2025 RecordNotFound)
      // Check if the error is specifically a record not found error
      if (error.code === 'P2025') {
         throw new NotFoundException(
           `Could not update profile for user with ID "${userId}". Profile not found.`,
         );
      }
      // Re-throw other unexpected errors
      console.error('Error updating profile:', error);
      throw new Error(`Failed to update profile for user ID "${userId}".`);
    }
  }
} 