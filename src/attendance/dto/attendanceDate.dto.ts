import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class AttendanceDateDTO {
  @IsDate()
  @Type(() => Date)
  date: Date;
}
