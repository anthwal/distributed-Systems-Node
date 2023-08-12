import { Test, TestingModule } from '@nestjs/testing';
import { ProducerGraphqlService } from './producer-graphql.service';

describe('ProducerGraphqlService', () => {
  let service: ProducerGraphqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerGraphqlService],
    }).compile();

    service = module.get<ProducerGraphqlService>(ProducerGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
