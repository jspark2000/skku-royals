import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { PassportModule } from '@nestjs/passport'
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt'
import { JwtStrategy } from './strategy/jwt.strategy'
import { MailerModule } from '@nestjs-modules/mailer'
import { EmailService } from 'src/email/email.service'

@Module({
  imports: [
    PassportModule,
    MailerModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        const options: JwtModuleOptions = {
          secret: process.env.JWT_SECRET
        }
        return options
      }
    })
  ],
  providers: [AuthService, JwtStrategy, EmailService],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
