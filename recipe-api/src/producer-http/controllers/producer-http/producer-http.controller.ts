import { Controller, Get, Req, Res } from '@nestjs/common';
import { ProducerHttpService } from '../../services/producer-http/producer-http.service';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller('recipes')
export class ProducerHttpController {
  constructor(private producerHttpService: ProducerHttpService) {}

  @Get(':id(\\d+)')
  public show(@Req() request: FastifyRequest, @Res() reply: FastifyReply) {
    return this.producerHttpService.index(request, reply);
  }
}
