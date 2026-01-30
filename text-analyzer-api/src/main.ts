import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedServer;

async function bootstrap() {
  if (!cachedServer) {
    const server = express();
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server),
    );

    app.enableCors({ origin: '*' });

    await app.init();
    cachedServer = server;
  }

  return cachedServer;
}

export default async (req, res) => {
  const server = await bootstrap();
  server(req, res);
};