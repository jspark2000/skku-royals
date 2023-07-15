import { CacheModuleOptions, CacheOptionsFactory } from '@nestjs/cache-manager'
import { Injectable } from '@nestjs/common'
import { redisStore } from 'cache-manager-redis-yet'

@Injectable()
export class CacheConfigService implements CacheOptionsFactory {
  async createCacheOptions(): Promise<CacheModuleOptions> {
    return {
      store: await redisStore({
        password: process.env.REDIS_PASSWORD,
        socket: {
          host: process.env.REDIS_URL,
          port: parseInt(process.env.REDIS_PORT, 10)
        }
      })
    }
  }
}
