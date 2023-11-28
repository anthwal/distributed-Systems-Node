import { Controller, Get } from '@nestjs/common';
import { ConsumerGraphqlService } from '../../services/consumer-graphql/consumer-graphql.service';
import { Observable } from 'rxjs';
import { IConsumerGraphQlResponse } from '../../../common/Interfaces';

@Controller('graphql')
export class ConsumerGraphqlController {
  constructor(private consumerGraphqlService: ConsumerGraphqlService) {}

  @Get()
  public index(): Observable<IConsumerGraphQlResponse> {
    return this.consumerGraphqlService.fetchResults();
  }
}
