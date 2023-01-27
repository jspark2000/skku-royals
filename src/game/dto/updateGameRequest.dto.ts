import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateGameRequestDTO {
  @IsString()
  gameName: string;

  @IsDate()
  @Type(() => Date)
  gameDate: Date;

  @IsNumber()
  homeTeamScore: number;

  @IsNumber()
  awayTeamScore: number;
}
