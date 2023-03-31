import { AttendanceStatus, Location } from '@prisma/client'
import { IsEnum, IsString } from 'class-validator'

export class UpdateSurveySubmitDTO {
  @IsEnum(AttendanceStatus)
  survey: AttendanceStatus

  @IsEnum(Location)
  location: Location

  @IsString()
  reason?: string
}
