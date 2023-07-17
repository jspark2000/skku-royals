import { MailerService } from '@nestjs-modules/mailer'
import { Injectable, InternalServerErrorException } from '@nestjs/common'
import type { SentMessageInfo } from 'nodemailer'
import * as path from 'path'

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmailAuthenticationPin(
    email: string,
    pin: string
  ): Promise<SentMessageInfo> {
    const sentEmailInfo = await this.mailerService.sendMail({
      to: email,
      subject: '[SKKU ROYALS] 이메일 인증',
      template: path.join(__dirname, 'templates/certification'),
      context: {
        link: `https://staff.skku-royals.football/verify-email?email=${email}&pin=${pin}`
      },
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(__dirname, 'templates/logo.png'),
          cid: 'logo'
        }
      ]
    })

    if (sentEmailInfo.accepted.length === 0) {
      throw new InternalServerErrorException()
    }

    return sentEmailInfo
  }
}
