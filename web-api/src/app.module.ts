import { Module } from '@nestjs/common';
import { ConsumerHttpModule } from './consumer-http/consumer-http.module';
import { EnvironmentModule } from './environment/environment.module';
import { ConsumerHttpsModule } from './consumer-https/consumer-https.module';
import { ConsumerGraphqlModule } from './consumer-graphql/consumer-graphql.module';
import { ConsumerGrpcModule } from './consumer-grpc/consumer-grpc.module';

@Module({
  imports: [ConsumerHttpModule, EnvironmentModule, ConsumerHttpsModule, ConsumerGraphqlModule, ConsumerGrpcModule],
})
export class AppModule {}
