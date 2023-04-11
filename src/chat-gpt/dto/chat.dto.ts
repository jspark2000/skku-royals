import { Type } from 'class-transformer'
import { IsArray, IsEnum, IsString } from 'class-validator'
import { ChatCompletionRequestMessageRoleEnum } from 'openai'

export class ChatDTO {
  @IsArray()
  @Type(() => Chat)
  messages: Chat[]
}

export class Chat {
  @IsEnum(ChatCompletionRequestMessageRoleEnum)
  role: ChatCompletionRequestMessageRoleEnum

  @IsString()
  content: string
}
