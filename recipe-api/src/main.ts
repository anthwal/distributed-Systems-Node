import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as fs from 'node:fs';
import { ConfigService } from '@nestjs/config';
import { ISystemConfig } from './environment/interfaces/environment-types.interface';

async function bootstrap() {
  const useHttps =
    process.env.HTTPS === 'true'
      ? {
          https: {
            key: fs.readFileSync(`${process.cwd()}/tls/basic-private-key.key`),
            cert: fs.readFileSync(`${process.cwd()}/../shared/tls/basic-certificate.cert`),
          },
        }
      : {};
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true, ...useHttps }),
  );
  const config = app.get(ConfigService);
  await app.listen(config.get<ISystemConfig>('system').port);
}
bootstrap();
