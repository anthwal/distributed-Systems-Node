import { Injectable } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IRecipe } from '../../../common/Interfaces';

export interface IProducerHttpServiceResponse {
  producer_pid: number;
  recipe: IRecipe;
}
@Injectable()
export class ProducerHttpService {
  public index(req: FastifyRequest, reply: FastifyReply): { error: string } | IProducerHttpServiceResponse {
    console.log(`worker request pid=${process.pid}`);
    const id = Number(req.params['id']);
    if (id !== 42) {
      reply.status(404);
      return { error: 'not_found' };
    }
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
