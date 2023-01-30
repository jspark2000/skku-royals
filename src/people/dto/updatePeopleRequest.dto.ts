import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class UpdatePeopleRequestDTO {
  @IsString()
  name: string;

  @IsNumber()
  @Type(() => Number)
  studentNo: number;

  @IsString()
  uid: string;
}
