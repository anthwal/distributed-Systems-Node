import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerHttpController } from './consumer-http.controller';

describe('ConsumerHttpController', () => {
  let controller: ConsumerHttpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerHttpController],
    }).compile();

    controller = module.get<ConsumerHttpController>(ConsumerHttpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
