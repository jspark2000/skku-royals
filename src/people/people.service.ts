import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PeopleListResponseDTO } from './dto/peopleListResponse.dto';
import { PeopleUpdateDTO } from './dto/peopleUpdate.dto';
import { RegisterPeopleDTO } from './dto/registerPeople.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPeopleModal(id: number) {
    const peopleModal = await this.prismaService.people.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        studentNo: true,
        newbie: true,
        absence: true,
        offPosition: true,
        defPosition: true,
        splPosition: true,
      },
    });

    if (!peopleModal) {
      throw new UnprocessableEntityException(
        '해당하는 부원이 존재하지 않습니다.',
      );
    }

    return peopleModal;
  }

  async getPeopleList(): Promise<PeopleListResponseDTO[]> {
    const peopleList = await this.prismaService.people.findMany({
      select: {
        id: true,
        name: true,
        studentNo: true,
        newbie: true,
        absence: true,
        offPosition: true,
        defPosition: true,
        splPosition: true,
      },
      orderBy: [{ newbie: 'asc' }, { studentNo: 'asc' }, { name: 'asc' }],
    });

    if (peopleList.length === 0) {
      throw new HttpException(
        '데이터베이스에서 정보를 불러오는데 실패했습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return peopleList;
  }

  async updatePeople(id: number, peopleDTO: PeopleUpdateDTO) {
    const result = await this.prismaService.people.update({
      where: {
        id,
      },
      data: {
        ...peopleDTO,
      },
      select: {
        id: true,
      },
    });

    if (!result) {
      throw new HttpException(
        '해당하는 부원 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return result;
  }

  async deletePeople(id: number) {
    return await this.prismaService.people.delete({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });
  }

  async registerPeople(peopleDTO: RegisterPeopleDTO) {
    const result = await this.prismaService.people.create({
      data: {
        name: peopleDTO.name,
        studentNo: peopleDTO.studentNo,
      },
      select: {
        id: true,
      },
    });

    if (!result) {
      throw new HttpException(
        '내부 오류 발생',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return result;
  }
}
