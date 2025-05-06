import {
  IsNotEmpty,
  IsDateString,
  IsEnum,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

// This enum should ideally be kept in sync with the Prisma schema's HealthMetricType
export enum HealthMetricTypeDto {
  MOOD = 'MOOD',
  SLEEP_HOURS = 'SLEEP_HOURS',
  SLEEP_QUALITY = 'SLEEP_QUALITY', // As in Prisma schema
  STEPS = 'STEPS', // As in Prisma schema
  WEIGHT = 'WEIGHT', // Added
  HEIGHT = 'HEIGHT', // Added
}

export class HealthMetricDto {
  @IsNotEmpty()
  @IsEnum(HealthMetricTypeDto)
  metricType!: HealthMetricTypeDto;

  @IsNotEmpty()
  @IsNumber()
  // Add @Min/@Max or other specific validators per metricType if needed, or handle in service
  value!: number;
}

export class CreateHealthLogDto {
  @IsNotEmpty()
  @IsDateString()
  date!: string; // ISO 8601 date string for all metrics in this log operation

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HealthMetricDto)
  metrics!: HealthMetricDto[];
}
