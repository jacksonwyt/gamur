import { IsOptional, IsString, Length, MinLength } from 'class-validator';

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @Length(3, 30)
  username?: string;

  // Add other updatable profile fields here later (e.g., avatarConfig)
} 