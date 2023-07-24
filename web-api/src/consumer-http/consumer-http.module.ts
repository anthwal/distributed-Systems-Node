import { Module } from '@nestjs/common';
import { ConsumerHttpController } from './controllers/consumer-http/consumer-http.controller';
import { ConsumerHttpService } from './services/consumer-http/consumer-http.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ConsumerHttpController],
  providers: [ConsumerHttpService],
})
export class ConsumerHttpModule {}
