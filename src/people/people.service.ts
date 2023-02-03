import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlterPositionRequestDTO } from './dto/alterPositionRequest.dto';
import { PeopleListResponseDTO } from './dto/peopleListResponse.dto';
import { PeopleListWithUidResponseDTO } from './dto/peopleListWithUidResponse.dto';
import { RegisterPeopleRequestDTO } from './dto/registerPeopleRequest.dto';
import { UpdatePeopleRequestDTO } from './dto/updatePeopleRequest.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly prismaService: PrismaService) {}

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

  async updatePeople(
    peopleDTO: UpdatePeopleRequestDTO,
  ): Promise<{ uid: string }> {
    const updateResult = await this.prismaService.people.update({
      where: {
        uid: peopleDTO.uid,
      },
      data: {
        name: peopleDTO.name,
        studentNo: peopleDTO.studentNo,
      },
      select: {
        uid: true,
      },
    });

    if (!updateResult) {
      throw new HttpException(
        '부원 삭제에 실패했습니다.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return updateResult;
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

  async registerPeople(
    peopleDTO: RegisterPeopleRequestDTO,
  ): Promise<{ uid: string }> {
    const check = await this.prismaService.people.findUnique({
      where: {
        bandUserKey: peopleDTO.userKey,
      },
    });

    if (check) {
      throw new HttpException(
        '해당 부원이 이미 존재합니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const registerResult = await this.prismaService.people.create({
      data: {
        name: peopleDTO.name,
        studentNo: peopleDTO.studentNo,
        BandUser: {
          connect: {
            userKey: peopleDTO.userKey,
          },
        },
      },
      select: {
        uid: true,
      },
    });

    return registerResult;
  }
}
