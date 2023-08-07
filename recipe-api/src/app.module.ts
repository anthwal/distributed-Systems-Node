import { Module } from '@nestjs/common';
import { ProducerHttpModule } from './producer-http/producer-http.module';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  imports: [ProducerHttpModule, EnvironmentModule],
})
export class AppModule {}
