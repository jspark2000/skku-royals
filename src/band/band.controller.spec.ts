import { ConfigService } from '@nestjs/config'
import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { BandController } from './band.controller'
import { BandService } from './band.service'

describe('BandController', () => {
  let controller: BandController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandController],
      providers: [ConfigService, { provide: BandService, useValue: {} }]
    }).compile()

    controller = module.get<BandController>(BandController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
