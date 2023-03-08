import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { PrismaService } from 'src/prisma/prisma.service'
import { PeopleService } from './people.service'

describe('PeopleService', () => {
  let service: PeopleService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleService, { provide: PrismaService, useValue: {} }]
    }).compile()

    service = module.get<PeopleService>(PeopleService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })
})
