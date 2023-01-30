import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PeopleAdminController } from './people-admin.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  providers: [PeopleService, AuthService],
  controllers: [PeopleController, PeopleAdminController],
})
export class PeopleModule {}
