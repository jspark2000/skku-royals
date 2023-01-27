import { Type } from 'class-transformer';
import { IsDate, IsString } from 'class-validator';

export class RegisterGameRequestDTO {
  @IsString()
  gameName: string;

  @IsDate()
  @Type(() => Date)
  gameDate: Date;

  @IsString()
  homeTeamName: string;

  @IsString()
  awayTeamName: string;
}
