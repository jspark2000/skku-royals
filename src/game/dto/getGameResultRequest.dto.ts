import { Type } from 'class-transformer';
import { IsDate } from 'class-validator';

export class GetGameResultRequestDTO {
  @IsDate()
  @Type(() => Date)
  date: Date;
}
