import { Module } from '@nestjs/common';
import { ProducerHttpModule } from './producer-http/producer-http.module';

@Module({
  imports: [ProducerHttpModule],
})
export class AppModule {}
