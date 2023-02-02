import { Module } from '@nestjs/common';
import { GameAdminController } from './game-admin.controller';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  controllers: [GameController, GameAdminController],
  providers: [GameService],
})
export class GameModule {}
