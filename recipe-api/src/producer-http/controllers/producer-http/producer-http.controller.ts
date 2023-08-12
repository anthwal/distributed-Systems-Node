import { Controller, Get, Param, ParseIntPipe, Req, Res } from '@nestjs/common';
import { ProducerHttpService } from '../../services/producer-http/producer-http.service';
import { FastifyReply, FastifyRequest } from 'fastify';
import { IProducerHttpServiceResponse } from '../../../common/Interfaces';
import { ContextConfigDefault, RawRequestDefaultExpression, RawServerDefault } from 'fastify/types/utils';
import { RouteGenericInterface } from 'fastify/types/route';
import { FastifySchema } from 'fastify/types/schema';
import { FastifyTypeProviderDefault, ResolveFastifyRequestType } from 'fastify/types/type-provider';
import { FastifyBaseLogger } from 'fastify/types/logger';

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
