import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PeopleListResponseDTO } from './dto/peopleListResponse.dto';

@Injectable()
export class PeopleService {
  constructor(private readonly prismaServce: PrismaService) {}

  async getPeopleList(): Promise<PeopleListResponseDTO[]> {
    const peopleList = await this.prismaServce.people.findMany({
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
}
