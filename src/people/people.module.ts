import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';

@Module({
  providers: [PeopleService],
  controllers: [PeopleController]
})
export class PeopleModule {}
