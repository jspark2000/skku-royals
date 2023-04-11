import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule
} from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaModule } from './prisma/prisma.module'
import { AuthModule } from './auth/auth.module'
import { PeopleModule } from './people/people.module'
import { LoggerMiddleware } from './common/middlewares/logger.middleware'
import { AttendanceModule } from './attendance/attendance.module'
import { ApiModule } from './api/api.module'
import { APP_GUARD } from '@nestjs/core'
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard'
import { BandModule } from './band/band.module'
import { RolesGuard } from './common/guards/roles.guard'
import { RecordModule } from './record/record.module'
import { InjuryModule } from './injury/injury.module'
import { CacheConfigService } from './common/cache/cacheConfig.service'
import { SurveyModule } from './survey/survey.module'
import { ChatGptModule } from './chat-gpt/chat-gpt.module'

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      useClass: CacheConfigService
    }),
    AuthModule,
    PeopleModule,
    AttendanceModule,
    ApiModule,
    BandModule,
    RecordModule,
    InjuryModule,
    SurveyModule,
    ChatGptModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    }
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
}
