import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class AttendanceCheckRequestDTO {
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsString()
  name: string;

  @IsNumber()
  studentNo: number;

  @IsString()
  location: string;
}
