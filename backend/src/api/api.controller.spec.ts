import { Test, TestingModule } from '@nestjs/testing'
import { ConfigService } from '@nestjs/config'
import { ApiController } from './api.controller'
import { expect } from 'chai'
import { ApiService } from './api.service'

describe('ApiController', () => {
  let controller: ApiController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiController],
      providers: [ConfigService, { provide: ApiService, useValue: {} }]
    }).compile()

    controller = module.get<ApiController>(ApiController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
