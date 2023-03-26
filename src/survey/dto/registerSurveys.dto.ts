import { AttendanceType } from '@prisma/client'
import { Type } from 'class-transformer'
import { IsArray, IsDate, IsEnum, IsString } from 'class-validator'

export class registerSurveysDTO {
  @IsString()
  name: string

  @IsArray()
  @Type(() => SurveyInfo)
  surveys: SurveyInfo[]
}

export class SurveyInfo {
  @IsDate()
  @Type(() => Date)
  date: Date

  @IsEnum(AttendanceType)
  type: AttendanceType
}
