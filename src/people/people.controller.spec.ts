import { Test, TestingModule } from '@nestjs/testing'
import { expect } from 'chai'
import { PeopleAdminController } from './people-admin.controller'
import { PeopleController } from './people.controller'
import { PeopleService } from './people.service'

describe('PeopleController', () => {
  let controller: PeopleController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController, PeopleAdminController],
      providers: [{ provide: PeopleService, useValue: {} }]
    }).compile()

    controller = module.get<PeopleController>(PeopleController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
