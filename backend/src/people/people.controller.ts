import { Controller, Get } from '@nestjs/common'
import { People, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { PeopleService } from './people.service'

@Controller('people')
@Roles(Role.Newbie)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('list')
  async getPeopleList(): Promise<People[]> {
    return await this.peopleService.getPeopleList()
  }

  @Get('coaching-staff/list')
  async getCoachingStaffList() {
    return await this.peopleService.getCoachingStaffList()
  }
}
