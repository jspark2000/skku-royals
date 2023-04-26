import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from './auth.controller'
import { expect } from 'chai'
import { ConfigService } from '@nestjs/config'
import { AuthService } from './auth.service'

describe('AuthController', () => {
  let controller: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [ConfigService, { provide: AuthService, useValue: {} }]
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).to.be.ok
  })
})
