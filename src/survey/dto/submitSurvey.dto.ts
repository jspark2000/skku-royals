import { AttendanceStatus, Location } from '@prisma/client'
import { Type } from 'class-transformer'
import {
  IsArray,
  IsDate,
  IsEnum,
  IsNumber,
  IsNumberString
} from 'class-validator'

export class SubmitSurveyDTO {
  @IsNumber()
  @Type(() => Number)
  id: number

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
