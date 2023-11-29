import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerGrpcController } from './consumer-grpc.controller';

describe('ConsumerGrpcController', () => {
  let controller: ConsumerGrpcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerGrpcController],
    }).compile();

    controller = module.get<ConsumerGrpcController>(ConsumerGrpcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
