import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import * as fs from 'node:fs';
import { ConfigService } from '@nestjs/config';
import { ISystemConfig } from './environment/interfaces/environment-types.interface';
import { ClientOptions, MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'node:path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'recipe',
    protoPath: [join(process.cwd(), 'src', 'producer-grpc', 'protos', 'grpc-recipe.proto')],
    loader: { arrays: true, objects: true, enums: String },
  },
};
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
  // Makes the application a hybrid one (HTTP + gRPC)
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);
  await app.startAllMicroservices();
  const config = app.get(ConfigService);
  await app.listen(config.get<ISystemConfig>('system').port);
}
bootstrap();
