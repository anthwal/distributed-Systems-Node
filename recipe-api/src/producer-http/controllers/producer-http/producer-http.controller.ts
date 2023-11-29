import { Controller, Get, Param, ParseIntPipe, Res } from '@nestjs/common';
import { ProducerHttpService } from '../../services/producer-http/producer-http.service';
import { FastifyReply } from 'fastify';
import { IProducerHttpServiceResponse } from '../../../common/Interfaces';

@Controller('recipes')
export class ProducerHttpController {
  constructor(private producerHttpService: ProducerHttpService) {}

  @Get(':id(\\d+)')
  public show(
    @Param('id', ParseIntPipe) recipeId: number,
    @Res({ passthrough: true }) reply: FastifyReply,
  ): IProducerHttpServiceResponse | { error: string } {
    console.log(`worker request pid=${process.pid}`);
    if (recipeId !== 42) {
      reply.status(404);
      return { error: 'not_found' };
    }
    return this.producerHttpService.index(recipeId);
  }
}
