import { Controller, Get, Param } from '@nestjs/common'
import { People, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { PeopleService } from './people.service'
import { Public } from 'src/auth/decorators/public.decorator'

@Public()
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('list')
  @Roles(Role.Newbie)
  async getPeopleList(): Promise<People[]> {
    return await this.peopleService.getPeopleList()
  }

  @Public()
  @Get('/:studentId')
  async checkStudentID(
    @Param('studentId') studentId: string
  ): Promise<boolean> {
    return await this.peopleService.checkStudentId(studentId)
  }

  @Get('coaching-staff/list')
  @Roles(Role.Newbie)
  async getCoachingStaffList() {
    return await this.peopleService.getCoachingStaffList()
  }
}
