import { AttendanceStatus, Location } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsArray, IsDate, IsEnum, IsNumberString } from 'class-validator'

export class SubmitSurveyDTO {
  @IsNumberString()
  studentId: string

  @IsArray()
  @Type(() => SurveyData)
  surveys: SurveyData[]
}

export class SurveyData {
  @IsDate()
  @Type(() => Date)
  date: Date

  @IsEnum(Location)
  location: Location

  @IsEnum(AttendanceStatus)
  survey: AttendanceStatus

  reason?: string
}
