import { Controller, Get } from '@nestjs/common'
import { Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { PeopleListResponseDTO } from './dto/peopleListResponse.dto'
import { PeopleService } from './people.service'

@Controller('people')
@Roles(Role.Newbie)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get('list')
  async getPeopleList(): Promise<PeopleListResponseDTO[]> {
    return await this.peopleService.getPeopleList()
  }
}
