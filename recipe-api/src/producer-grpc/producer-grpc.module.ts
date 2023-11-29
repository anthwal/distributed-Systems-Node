import { Module } from '@nestjs/common';
import { ProducerGrpcController } from './controllers/producer-grpc/producer-grpc.controller';
import { ProducerGrpcService } from './services/producer-grpc/producer-grpc.service';

@Module({
  controllers: [ProducerGrpcController],
  providers: [ProducerGrpcService],
})
export class ProducerGrpcModule {}
