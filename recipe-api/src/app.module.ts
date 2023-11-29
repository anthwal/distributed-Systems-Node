import { Module } from '@nestjs/common';
import { ProducerHttpModule } from './producer-http/producer-http.module';
import { EnvironmentModule } from './environment/environment.module';
import { ProducerGraphqlModule } from './producer-graphql/producer-graphql.module';
import { ProducerGrpcModule } from './producer-grpc/producer-grpc.module';

@Module({
  imports: [ProducerHttpModule, EnvironmentModule, ProducerGraphqlModule, ProducerGrpcModule],
})
export class AppModule {}
