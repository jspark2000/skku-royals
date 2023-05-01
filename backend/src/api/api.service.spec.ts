import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { PrismaService } from 'src/prisma/prisma.service'
import { ApiService } from './api.service'

describe('ApiService', () => {
  let service: ApiService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiService, { provide: PrismaService, useValue: {} }]
    }).compile()

    service = module.get<ApiService>(ApiService)
  })

  it('should be defined', () => {
    expect(service).to.be.ok
  })
})
