import { TeamRole } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

export class UpdateCoachingStaffDTO {
  @IsString()
  @IsOptional()
  name?: string

  @IsEnum(TeamRole)
  @IsOptional()
  teamRole?: TeamRole

  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  admissionYear?: number

  @IsString()
  @IsOptional()
  position?: string
}
