import { Module } from '@nestjs/common';
import { ConsumerHttpModule } from './consumer-http/consumer-http.module';
import { EnvironmentModule } from './environment/environment.module';

@Module({
  imports: [ConsumerHttpModule, EnvironmentModule],
})
export class AppModule {}
