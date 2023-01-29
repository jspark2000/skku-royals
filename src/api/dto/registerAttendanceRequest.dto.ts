import { Type } from 'class-transformer';
import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';

export class RegisterAttendanceRequestDTO {
  @IsArray()
  columnNames: string;

  @IsString()
  attendances: string;

  @IsNumber()
  @Type(() => Number)
  attendances_len: number;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @IsString()
  sheetName: string;
}
