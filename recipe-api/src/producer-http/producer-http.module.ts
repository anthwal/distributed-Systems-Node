import { Module } from '@nestjs/common';
import { ProducerHttpService } from './services/producer-http/producer-http.service';
import { ProducerHttpController } from './controllers/producer-http/producer-http.controller';

@Module({
  providers: [ProducerHttpService],
  controllers: [ProducerHttpController],
})
export class ProducerHttpModule {}
