import { Module } from '@nestjs/common';
import { BandService } from './band.service';
import { BandController } from './band.controller';

@Module({
  providers: [BandService],
  controllers: [BandController]
})
export class BandModule {}
