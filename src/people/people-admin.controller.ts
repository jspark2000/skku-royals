import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post
} from '@nestjs/common'
import { Prisma, Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { PeopleUpdateDTO } from './dto/peopleUpdate.dto'
import { RegisterPeopleDTO } from './dto/registerPeople.dto'
import { PeopleService } from './people.service'
import { RegisterCoachingStaffDTO } from './dto/registerCoachingStaff.dto'
import { UpdateCoachingStaffDTO } from './dto/updateCoachingStaff.dto'

@Roles(Role.Admin)
@Controller('admin/people')
export class PeopleAdminController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get(':id')
  async getPeopleModal(@Param('id', ParseIntPipe) id: number) {
    return await this.peopleService.getPeopleModal(id)
  }

  @Patch(':id')
  async updatePeople(
    @Param('id', ParseIntPipe) id: number,
    @Body() peopleDTO: PeopleUpdateDTO
  ) {
    return await this.peopleService.updatePeople(id, peopleDTO)
  }

  @Post()
  async registerPeople(@Body() peopleDTO: RegisterPeopleDTO) {
    return await this.peopleService.registerPeople(peopleDTO)
  }

  @Delete(':id')
  async deletePeople(@Param('id', ParseIntPipe) id: number) {
    return await this.peopleService.deletePeople(id)
  }

  @Patch('coaching-staff/:id')
  async updateCoachingStaff(
    @Param('id', ParseIntPipe) id: number,
    @Body() peopleDTO: UpdateCoachingStaffDTO
  ) {
    try {
      return await this.peopleService.updateCoachingStaff(id, peopleDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 부원정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }

  @Post('coaching-staff')
  async registerCoachingStaff(@Body() peopleDTO: RegisterCoachingStaffDTO) {
    try {
      return await this.peopleService.registerCoachingStaff(peopleDTO)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 부원정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }

  @Delete('coaching-staf/:id')
  async deleteCoachingStaff(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.peopleService.deleteCoachingStaff(id)
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new HttpException(
          { message: '존재하지 않는 부원정보입니다.', code: 100 },
          HttpStatus.NOT_FOUND
        )
      } else {
        throw error
      }
    }
  }
}
