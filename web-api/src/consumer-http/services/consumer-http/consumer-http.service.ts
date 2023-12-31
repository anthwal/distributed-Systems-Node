import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { IConsumerHttpServiceResponse, IProducerResponse } from '../../../common/Interfaces';
import { ConfigService } from '@nestjs/config';
import { ITargetProducerConfig } from '../../../environment/interfaces/environment-types.interface';

@Injectable()
export class ConsumerHttpService {
  constructor(public httpService: HttpService, private configService: ConfigService) {}

  public config = this.configService.get<ITargetProducerConfig>('target');

  public TARGET = `${this.config.targetHost}:${this.config.targetPort}`;

  public fetchResults(): Observable<IConsumerHttpServiceResponse> {
    const req = this.httpService.get<IProducerResponse>(`http://${this.TARGET}/recipes/42`);

    return req.pipe(map((response) => ({ consumer_pid: process.pid, producer_data: response.data })));
  }
}
