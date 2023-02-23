import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsString } from 'class-validator';

export class attendanceRegisterDTO {
  @IsString()
  name: string;

  @IsNumber()
  studentNo: number;

  @IsBoolean()
  survey: boolean;

  @IsBoolean()
  late: boolean;

  @IsString()
  location: string;

  @IsDate()
  @Type(() => Date)
  date: Date;
}
