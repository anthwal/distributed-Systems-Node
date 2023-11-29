import { Module } from '@nestjs/common';
import { ConsumerGrpcService } from './services/consumer-grpc/consumer-grpc.service';
import { ConsumerGrpcController } from './controllers/consumer-grpc/consumer-grpc.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RECIPE_PACKAGE_TOKEN } from '../helpers/injection-tokens';
import { join } from 'node:path';

@Module({
  imports: [
    ClientsModule.register([
      {
        transport: Transport.GRPC,
        name: RECIPE_PACKAGE_TOKEN,
        options: {
          package: 'recipe',
          protoPath: join(process.cwd(), 'src', 'consumer-grpc', 'protos', 'grpc-recipe.proto'),
          loader: { arrays: true, objects: true, enums: String },
        },
      },
    ]),
  ],
  providers: [ConsumerGrpcService],
  controllers: [ConsumerGrpcController],
})
export class ConsumerGrpcModule {}
