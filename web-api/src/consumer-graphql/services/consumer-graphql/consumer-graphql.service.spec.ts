import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerGraphqlService } from './consumer-graphql.service';

describe('ConsumerGraphqlService', () => {
  let service: ConsumerGraphqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumerGraphqlService],
    }).compile();

    service = module.get<ConsumerGraphqlService>(ConsumerGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
