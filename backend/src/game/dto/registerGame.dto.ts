import { Type } from 'class-transformer'
import { IsDate, IsString } from 'class-validator'

export class RegisterGameDTO {
  @IsString()
  gameName: string

  @IsDate()
  @Type(() => Date)
  gameDate: Date

  @IsString()
  homeTeamName: string

  @IsString()
  awayTeamName: string
}
