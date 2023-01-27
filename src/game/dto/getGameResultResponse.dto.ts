import { GameInfoDTO } from './gameInfo.dto';

export interface GetGameResultResponseDTO extends GameInfoDTO {
  homeTeamName: string;
  homeTeamScore: number;
  awayTeamName: string;
  awayTeamScore: number;
}
