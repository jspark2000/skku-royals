import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PeopleAdminController } from './people-admin.controller';

@Module({
  providers: [PeopleService],
  controllers: [PeopleController, PeopleAdminController],
  exports: [PeopleService],
})
export class PeopleModule {}
