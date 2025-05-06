import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class CreateHabitDto {
  @ApiProperty({ example: 'Drink Water', description: 'Name of the habit' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'daily',
    description: 'Frequency of the habit (e.g., daily, weekly)',
  })
  @IsString()
  @IsNotEmpty() // Consider a more specific validation like IsEnum if you have predefined frequencies
  frequency!: string; // e.g., 'daily', 'weekly', 'monday_wednesday_friday'

  @ApiProperty({ example: 8, description: 'Target for the habit (optional)' })
  @IsOptional()
  @IsNumber()
  @Min(1)
  target?: number; // e.g., target completions per day/week if frequency is daily/weekly
}
