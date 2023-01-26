import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class DailyAttendancesRequestDTO {
  @IsDate()
  @Type(() => Date)
  date: Date;
}
