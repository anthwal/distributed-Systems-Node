import { Injectable } from '@nestjs/common';
import { IProducerHttpServiceResponse } from '../../../common/Interfaces';

@Injectable()
export class ProducerHttpService {
  public index(id: number): IProducerHttpServiceResponse {
    return {
      producer_pid: process.pid,
      recipe: {
        id,
        name: 'Chana Daal',
        steps: 'Throw it in a pot...',
        ingredients: [
          { id: 1, name: 'Chana Daal', quantity: '100 gm' },
          { id: 2, name: 'Dhaniya Masala', quantity: '10 gm' },
        ],
      },
    };
  }
}
