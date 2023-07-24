import { Controller, Get, Req, Res } from '@nestjs/common';
import { ProducerHttpService } from '../../services/producer-http/producer-http.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IProducerHttpServiceResponse } from '../../../common/Interfaces';

@Controller('recipes')
export class ProducerHttpController {
  constructor(private producerHttpService: ProducerHttpService) {}

  @Get(':id(\\d+)')
  public show(
    @Req() request: FastifyRequest,
    @Res({ passthrough: true }) reply: FastifyReply,
  ): IProducerHttpServiceResponse | { error: string } {
    console.log(`worker request pid=${process.pid}`);
    const id = Number(request.params['id']);
    if (id !== 42) {
      reply.status(404);
      return { error: 'not_found' };
    }
    return this.producerHttpService.index(id);
  }
}
