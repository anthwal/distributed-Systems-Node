import { Test, TestingModule } from '@nestjs/testing';
import { ProducerGrpcController } from './producer-grpc.controller';

describe('ProducerGrpcController', () => {
  let controller: ProducerGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerGrpcController],
    }).compile();

    controller = module.get<ProducerGrpcController>(ProducerGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
