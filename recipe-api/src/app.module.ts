import { Module } from '@nestjs/common';
import { ProducerHttpModule } from './producer-http/producer-http.module';
import { EnvironmentModule } from './environment/environment.module';
import { ProducerGraphqlModule } from './producer-graphql/producer-graphql.module';

@Module({
  imports: [ProducerHttpModule, EnvironmentModule, ProducerGraphqlModule],
})
export class AppModule {}
