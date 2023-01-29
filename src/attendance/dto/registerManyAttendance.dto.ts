import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

export class RegisterManyAttendanceDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Attendance)
  attendances: Attendance[];
}

class Attendance {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  studentNo: number;

  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsBoolean()
  survey: boolean;

  @IsBoolean()
  late: boolean;

  @IsString()
  location: string;
}
