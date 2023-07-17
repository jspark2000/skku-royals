import { Controller, Get, Param } from '@nestjs/common'
import { People, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { PeopleService } from './people.service'
import { Public } from 'src/auth/decorators/public.decorator'

@Public()
@Roles(Role.Normal)
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('list')
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
  async getCoachingStaffList() {
    return await this.peopleService.getCoachingStaffList()
  }
}
