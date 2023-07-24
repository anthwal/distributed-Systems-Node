import { Controller, Get } from '@nestjs/common';
import { ConsumerHttpService } from '../../services/consumer-http/consumer-http.service';
import { Observable } from 'rxjs';
import { IConsumerHttpServiceResponse } from '../../../common/Interfaces';

@Controller()
export class ConsumerHttpController {
  constructor(private consumerHttpService: ConsumerHttpService) {}
  @Get()
  public index(): Observable<IConsumerHttpServiceResponse> {
    return this.consumerHttpService.fetchResults();
  }
}
