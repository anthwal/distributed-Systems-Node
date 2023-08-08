import { Module } from '@nestjs/common';
import { ConsumerHttpModule } from './consumer-http/consumer-http.module';
import { EnvironmentModule } from './environment/environment.module';
import { ConsumerHttpsModule } from './consumer-https/consumer-https.module';

@Module({
  imports: [ConsumerHttpModule, EnvironmentModule, ConsumerHttpsModule],
})
export class AppModule {}
