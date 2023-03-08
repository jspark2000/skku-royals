import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Roles } from 'src/common/decorators/roles.decorator';
import { PeopleUpdateDTO } from './dto/peopleUpdate.dto';
import { RegisterPeopleDTO } from './dto/registerPeople.dto';
import { PeopleService } from './people.service';

@Roles(Role.Admin)
@Controller('admin/people')
export class PeopleAdminController {
  constructor(private readonly peopleService: PeopleService) {}

  @Get(':id')
  async getPeopleModal(@Param('id', ParseIntPipe) id: number) {
    return await this.peopleService.getPeopleModal(id);
  }

  @Patch(':id')
  async updatePeople(
    @Param('id', ParseIntPipe) id: number,
    @Body() peopleDTO: PeopleUpdateDTO,
  ) {
    return await this.peopleService.updatePeople(id, peopleDTO);
  }

  @Post()
  async registerPeople(@Body() peopleDTO: RegisterPeopleDTO) {
    try {
      return await this.peopleService.registerPeople(peopleDTO);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        throw new BadRequestException('이미 존재하는 부원입니다.');
      }
    }
  }

  @Delete(':id')
  async deletePeople(@Param('id', ParseIntPipe) id: number) {
    return await this.peopleService.deletePeople(id);
  }
}
