import { Module } from '@nestjs/common';
import { ConsumerGraphqlService } from './services/consumer-graphql/consumer-graphql.service';
import { ConsumerGraphqlController } from './controllers/consumer-graphql/consumer-graphql.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ConsumerGraphqlService],
  controllers: [ConsumerGraphqlController],
})
export class ConsumerGraphqlModule {}
