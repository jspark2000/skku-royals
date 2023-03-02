import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class AttendanceCheckDTO {
  @IsNumber()
  id: number;

  @IsString()
  location: string;

  @IsBoolean()
  survey: boolean;

  @IsBoolean()
  late: boolean;

  @IsBoolean()
  checked: boolean;
}
