import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { IConsumerHttpServiceResponse, IProducerResponse } from '../../../common/Interfaces';

@Injectable()
export class ConsumerHttpService {
  constructor(public httpService: HttpService) {}

  public TARGET = 'localhost:4000';

  public fetchResults(): Observable<IConsumerHttpServiceResponse> {
    const req = this.httpService.get<IProducerResponse>(`http://${this.TARGET}/recipes/42`);

    return req.pipe(map((response) => ({ consumer_pid: process.pid, producer_data: response.data })));
  }
}
