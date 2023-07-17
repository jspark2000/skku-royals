import { Test, TestingModule } from '@nestjs/testing'
import { Cache } from 'cache-manager'
import { expect } from 'chai'
import { stub } from 'sinon'
import { AuthService } from './auth.service'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { EmailService } from 'src/email/email.service'

describe('AuthService', () => {
  let service: AuthService
  let cache: Cache

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: AuthService, useValue: {} },
        { provide: EmailService, useValue: {} },
        {
          provide: CACHE_MANAGER,
          useFactory: () => ({
            set: () => [],
            get: () => []
          })
        }
      ]
    }).compile()

    service = module.get<AuthService>(AuthService)
    cache = module.get<Cache>(CACHE_MANAGER)
  })

  it('should be defined', () => {
    stub(cache, 'get').resolves(true)
    expect(service).to.be.ok
  })
})
