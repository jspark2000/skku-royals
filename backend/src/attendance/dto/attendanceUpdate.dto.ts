import { AttendanceStatus, Location } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

export class AttendanceUpdateDTO {
  @IsNumber()
  @Type(() => Number)
  id: number

  @IsEnum(Location)
  location: Location

  @IsEnum(AttendanceStatus)
  survey: AttendanceStatus

  @IsEnum(AttendanceStatus)
  @IsOptional()
  actual?: AttendanceStatus

  @IsString()
  @IsOptional()
  reason?: string
}
