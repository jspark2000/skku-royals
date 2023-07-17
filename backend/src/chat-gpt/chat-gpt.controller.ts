import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post
} from '@nestjs/common'
import { Role } from '@prisma/client'
import { Roles } from 'src/common/decorators/roles.decorator'
import { ChatGptService } from './chat-gpt.service'
import { ChatDTO } from './dto/chat.dto'

@Roles(Role.Normal)
@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly chatGPTService: ChatGptService) {}

  @Post('ask')
  async ask(@Body() data: ChatDTO) {
    try {
      return await this.chatGPTService.ask(data)
    } catch (error) {
      throw new HttpException(
        { message: '[에러]: 새로고침 후 다시 시도해주세요', code: 100 },
        HttpStatus.NOT_ACCEPTABLE
      )
    }
  }
}
