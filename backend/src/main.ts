import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'
import { HttpExceptionFilter } from './common/exceptions/http-exception.filter'
import { json, urlencoded } from 'express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  app.set('trust proxy', 1)
  app.enableCors({
    credentials: true,
    origin: [
      process.env.ORIGIN,
      /\.skku-royals\.football$/,
      'http://127.0.0.1:5173'
    ],
    exposedHeaders: ['authorization']
  })

  app.use(json({ limit: '50mb' }))
  app.use(urlencoded({ extended: true, limit: '50mb' }))

  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true
    })
  )
  app.use(cookieParser())

  await app.listen(process.env.PORT)
}
bootstrap()
