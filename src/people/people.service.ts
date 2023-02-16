import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlterPositionRequestDTO } from './dto/alterPositionRequest.dto';
import { PeopleListResponseDTO } from './dto/peopleListResponse.dto';
import { PeopleListWithUidResponseDTO } from './dto/peopleListWithUidResponse.dto';
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
        offPosition: true,
        defPosition: true,
        splPosition: true,
      },
      orderBy: [{ studentNo: 'asc' }, { name: 'asc' }],
    });

    if (peopleList.length === 0) {
      throw new HttpException(
        '데이터베이스에서 정보를 불러오는데 실패했습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return peopleList;
  }

  async getPeopleListWithUid(): Promise<PeopleListWithUidResponseDTO[]> {
    const peopleList = await this.prismaService.people.findMany({
      select: {
        name: true,
        studentNo: true,
        uid: true,
      },
      orderBy: [{ studentNo: 'asc' }, { name: 'asc' }],
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

  async deletePeople(uid: string): Promise<{ uid: string }> {
    const result = await this.prismaService.people.delete({
      where: {
        uid,
      },
      select: {
        uid: true,
      },
    });

    if (!result) {
      throw new HttpException(
        '부원 삭제에 실패했습니다.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return result;
  }

  async alterPosition(
    alterPositionRequestDTO: AlterPositionRequestDTO,
  ): Promise<void> {
    const { uid } = await this.prismaService.people.findUniqueOrThrow({
      where: {
        name_studentNo: {
          name: alterPositionRequestDTO.name,
          studentNo: alterPositionRequestDTO.studentNo,
        },
      },
      select: {
        uid: true,
      },
    });

    await this.prismaService.people.update({
      where: {
        uid,
      },
      data: {
        offPosition: alterPositionRequestDTO.offPosition,
        defPosition: alterPositionRequestDTO.defPosition,
        splPosition: alterPositionRequestDTO.splPosition,
      },
      select: {
        uid: true,
      },
    });
  }

  async registerPeople(peopleDTO: RegisterPeopleDTO) {
    const result = await this.prismaService.people.create({
      data: {
        name: peopleDTO.name,
        studentNo: peopleDTO.studentNo,
        BandUser: {
          connect: {
            id: peopleDTO.id,
          },
        },
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
