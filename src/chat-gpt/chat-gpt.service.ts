import { Injectable, OnModuleInit } from '@nestjs/common'
import { Configuration, OpenAIApi } from 'openai'
import { ChatDTO } from './dto/chat.dto'

@Injectable()
export class ChatGptService implements OnModuleInit {
  openai: OpenAIApi

  async onModuleInit() {
    await this.init()
  }

  async init() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY
    })

    this.openai = new OpenAIApi(configuration)
  }

  async ask(data: ChatDTO) {
    const completion = await this.openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: data.messages
    })

    return { answer: completion.data.choices[0].message.content }
  }
}
