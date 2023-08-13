import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerGraphqlController } from './consumer-graphql.controller';

describe('ConsumerGraphqlController', () => {
  let controller: ConsumerGraphqlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsumerGraphqlController],
    }).compile();

    controller = module.get<ConsumerGraphqlController>(ConsumerGraphqlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
