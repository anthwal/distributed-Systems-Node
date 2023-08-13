import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ITargetProducerConfig } from '../../../environment/interfaces/environment-types.interface';
import { map, Observable } from 'rxjs';
import { IConsumerGraphQlResponse, IProducerResponse } from '../../../common/Interfaces';

@Injectable()
export class ConsumerGraphqlService {
  constructor(public httpService: HttpService, private configService: ConfigService) {}

  public config = this.configService.get<ITargetProducerConfig>('target');

  public TARGET = `${this.config.targetHost}:${this.config.targetPort}`;

  public complex_query = /*GraphQL*/ `query kitchenSink ($id:ID) {
      recipe(id: $id) {
        id
        name
#        ingredients {
#          name
#          quantity
#        }
      }
  }`;

  public fetchResults(): Observable<IConsumerGraphQlResponse> {
    const req = this.httpService.post<IProducerResponse>(`http://${this.TARGET}/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: this.complex_query,
        variables: { id: '42' },
      }),
    });
    return req.pipe(map((response) => ({ consumer_pid: process.pid, producer_data: response.data })));
  }
}
