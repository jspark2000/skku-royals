import { Type } from 'class-transformer'
import { IsDate } from 'class-validator'

export class GetAttendanceStatisticsDTO {
  @IsDate()
  @Type(() => Date)
  start: Date

  @IsDate()
  @Type(() => Date)
  end: Date
}
