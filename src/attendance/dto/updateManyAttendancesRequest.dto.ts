import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class UpdateManyAttendancesRequestDTO {
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsDate()
  @Type(() => Date)
  toDate: Date;
}
