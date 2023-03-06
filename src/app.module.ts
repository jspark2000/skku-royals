import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PeopleModule } from './people/people.module';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { AttendanceModule } from './attendance/attendance.module';
import { ApiModule } from './api/api.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { BandModule } from './band/band.module';
import * as redisStore from 'cache-manager-redis-store';
import { RolesGuard } from './common/guards/roles.guard';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        return {
          store: redisStore,
          host: process.env.REDIS_URL,
          port: process.env.REDIS_PORT,
          auth_pass: process.env.REDIS_PASSWORD,
        };
      },
    }),
    AuthModule,
    PeopleModule,
    AttendanceModule,
    ApiModule,
    BandModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
