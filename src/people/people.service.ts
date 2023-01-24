import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PeopleService {
  constructor(private readonly prismaServce: PrismaService) {}
}
