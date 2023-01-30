import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class RegisterPeopleRequestDTO {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  studentNo: number;

  @IsString()
  userKey: string;
}
