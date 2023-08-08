import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ITargetProducerConfig } from '../../../environment/interfaces/environment-types.interface';
import { map, Observable } from 'rxjs';
import { IConsumerHttpsServiceResponse, IProducerResponse } from '../../../common/Interfaces';
import * as https from 'node:https';
import * as fs from 'node:fs';

@Injectable()
export class ConsumerHttpsService {
  constructor(public httpService: HttpService, private configService: ConfigService) {}

  public config = this.configService.get<ITargetProducerConfig>('target');

  public TARGET = `${this.config.targetHost}:${this.config.targetPort}`;

  public fetchResults(): Observable<IConsumerHttpsServiceResponse> {
    const req = this.httpService.get<IProducerResponse>(`https://${this.TARGET}/recipes/42`, {
      httpsAgent: new https.Agent({ ca: fs.readFileSync(`${process.cwd()}/../shared/tls/basic-certificate.cert`) }),
    });

    return req.pipe(map((response) => ({ consumer_pid: process.pid, producer_data: response.data })));
  }
}
