import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { RecordController } from './record.controller'
import { RecordService } from './record.service'

describe('RecordController', () => {
  let controller: RecordController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecordController],
      providers: [{ provide: RecordService, useValue: {} }]
    }).compile()

    controller = module.get<RecordController>(RecordController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
