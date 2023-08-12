import { Test, TestingModule } from '@nestjs/testing';
import { ProducerGraphqlResolver } from './producer-graphql.resolver';

describe('ProducerGraphqlResolver', () => {
  let resolver: ProducerGraphqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerGraphqlResolver],
    }).compile();

    resolver = module.get<ProducerGraphqlResolver>(ProducerGraphqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
