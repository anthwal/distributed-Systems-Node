import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerHttpsController } from './consumer-https.controller';

describe('ConsumerHttpsController', () => {
  let controller: ConsumerHttpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerHttpsController],
    }).compile();

    controller = module.get<ConsumerHttpsController>(ConsumerHttpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
