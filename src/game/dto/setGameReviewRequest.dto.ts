import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber } from 'class-validator';

export class SetGameReviewRequestDTO {
  @IsNumber()
  @Type(() => Number)
  gameId: number;

  @IsDate()
  @Type(() => Date)
  deadLine: Date;

  @IsDate()
  @Type(() => Date)
  lateLine: Date;

  @IsBoolean()
  @Type(() => Boolean)
  everyone: boolean;
}
