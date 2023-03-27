import { AttendanceStatus } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsNumber, IsString } from 'class-validator'

export class RegisterSeparateSurveyDTO {
  @IsNumber()
  @Type(() => Number)
  peopleId: number

  @IsDate()
  @Type(() => Date)
  date: Date

  @IsEnum(AttendanceStatus)
  survey: AttendanceStatus

  @IsString()
  reason?: string
}
