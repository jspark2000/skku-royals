import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class RegisterOneAttendanceDTO {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  studentNo: number;

  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsNumber()
  @Type(() => Number)
  survey: number;

  @IsString()
  location: string;
}
