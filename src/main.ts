import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { Client } from 'pg';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.set('trust proxy', 1);
  app.enableCors();

  const conObject = {
    user: process.env.SESSION_USER,
    host: process.env.SESSION_HOST,
    database: process.env.SESSION_DATABASE,
    password: process.env.SESSION_PASSWORD,
    port: parseInt(process.env.SESSION_PORT, 10),
  };

  const sessionClient = new Client(conObject);
  sessionClient.connect();

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const sessionStore = new (require('connect-pg-simple')(session))({
    conObject,
  });

  app.use(
    session({
      store: sessionStore,
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        sameSite: false,
        // secure: true,
      },
    }),
  );

  app.useGlobalPipes(new ValidationPipe());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(3000);
}
bootstrap();
