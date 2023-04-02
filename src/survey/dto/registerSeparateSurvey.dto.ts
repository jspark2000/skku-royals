import { AttendanceStatus, Location } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator'

export class RegisterSeparateSurveyDTO {
  @IsString()
  name: string

  @IsNumber()
  @Type(() => Number)
  studentNo: number

  @IsDate()
  @Type(() => Date)
  date: Date

  @IsEnum(AttendanceStatus)
  survey: AttendanceStatus

  @IsEnum(Location)
  location: Location

  @IsString()
  @IsOptional()
  reason?: string
}
