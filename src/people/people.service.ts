import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlterPositionRequestDTO } from './dto/alterPositionRequest.dto';
import { PeopleListResponseDTO } from './dto/peopleListResponse.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly prismaService: PrismaService) {}

  async getPeopleList(): Promise<PeopleListResponseDTO[]> {
    const peopleList = await this.prismaService.people.findMany({
      select: {
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
}
