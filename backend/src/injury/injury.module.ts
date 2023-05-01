import { Module } from '@nestjs/common'
import { InjuryService } from './injury.service'
import { InjuryController } from './injury.controller'

@Module({
  providers: [InjuryService],
  controllers: [InjuryController]
})
export class InjuryModule {}
