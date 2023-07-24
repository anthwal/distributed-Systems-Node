import { Module } from '@nestjs/common';
import { ConsumerHttpModule } from './consumer-http/consumer-http.module';

@Module({
  imports: [ConsumerHttpModule],
})
export class AppModule {}
