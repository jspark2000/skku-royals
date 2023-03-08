import { Type } from 'class-transformer'
import { IsDate } from 'class-validator'

export class AttendanceDeleteDTO {
  @IsDate()
  @Type(() => Date)
  date: Date
}
