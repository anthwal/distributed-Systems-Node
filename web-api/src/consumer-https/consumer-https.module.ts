import { Module } from '@nestjs/common';
import { ConsumerHttpsService } from './services/consumer-https/consumer-https.service';
import { ConsumerHttpsController } from './controllers/consumer-https/consumer-https.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ConsumerHttpsService],
  controllers: [ConsumerHttpsController],
})
export class ConsumerHttpsModule {}
