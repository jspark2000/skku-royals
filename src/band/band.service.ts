import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BandService {
  constructor(private readonly prismaService: PrismaService) {}

  async getBandUserList() {
    const bandUserList = await this.prismaService.bandUser.findMany({
      select: {
        id: true,
        profileUrl: true,
        userNickname: true,
        People: {
          select: {
            uid: true,
          },
        },
      },
    });

    if (bandUserList.length === 0) {
      throw new HttpException(
        '밴드 계정 정보를 불러오는데 실패했습니다.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return bandUserList.map((bandUser) => {
      return {
        id: bandUser.id,
        profileUrl: bandUser.profileUrl,
        userNickname: bandUser.userNickname,
        registered: bandUser.People ? true : false,
      };
    });
  }

  async getBandProfile(userKey: string) {
    const profile = await this.prismaService.bandUser.findUnique({
      where: {
        userKey,
      },
      select: {
        userNickname: true,
        profileUrl: true,
        role: true,
      },
    });

    if (!profile) {
      throw new HttpException(
        '프로필 정보가 없습니다.',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return profile;
  }
}
