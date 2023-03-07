import { Controller, Get } from '@nestjs/common';
import { Role } from '@prisma/client';
import { Roles } from 'src/common/decorators/roles.decorator';
import { PeopleService } from './people.service';

@Controller('people')
@Roles(Role.Newbie)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('list')
  async getPeopleList() {
    // eslint-disable-next-line no-useless-catch
    try {
      return await this.peopleService.getPeopleList();
    } catch (error) {
      throw error;
    }
  }
}
