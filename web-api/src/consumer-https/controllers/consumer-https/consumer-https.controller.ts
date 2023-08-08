import { Controller, Get } from '@nestjs/common';
import { ConsumerHttpsService } from '../../services/consumer-https/consumer-https.service';
import { Observable } from 'rxjs';
import { IConsumerHttpsServiceResponse } from '../../../common/Interfaces';

@Controller('secure')
export class ConsumerHttpsController {
  constructor(private consumerHttpsService: ConsumerHttpsService) {}

  @Get()
  public index(): Observable<IConsumerHttpsServiceResponse> {
    return this.consumerHttpsService.fetchResults();
  }
}
