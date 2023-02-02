export interface GetGameReviewResponseDTO {
  gameInfo: {
    gameName: string;
    gameDate: Date;
  };

  gameReviewList: GameReviewDTO[];
}

export interface GameReviewDTO {
  name: string;
  studentNo: number;
  submission: boolean;
  late: boolean;
  time?: Date;
}
