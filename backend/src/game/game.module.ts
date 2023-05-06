import { Module } from '@nestjs/common'
import { GameController } from './game.controller'
import { GameAdminController } from './game-admin.controller'
import { GameService } from './game.service'

@Module({
  providers: [GameService],
  controllers: [GameController, GameAdminController]
})
export class GameModule {}
