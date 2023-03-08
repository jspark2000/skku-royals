import { CACHE_MANAGER } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import { Cache } from 'cache-manager'
import { expect } from 'chai'
import { AuthService } from './auth.service'

describe('AuthService', () => {
  let service: AuthService
  let cache: Cache

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: AuthService, useValue: {} },
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
    expect(service).to.be.ok
  })
})
