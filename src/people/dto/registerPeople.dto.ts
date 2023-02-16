import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class RegisterPeopleDTO {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  studentNo: number;

  @IsNumber()
  @Type(() => Number)
  id: number;
}
