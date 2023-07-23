import { Test, TestingModule } from '@nestjs/testing';
import { ProducerHttpController } from './producer-http.controller';

describe('ProducerHttpController', () => {
  let controller: ProducerHttpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducerHttpController],
    }).compile();

    controller = module.get<ProducerHttpController>(ProducerHttpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
