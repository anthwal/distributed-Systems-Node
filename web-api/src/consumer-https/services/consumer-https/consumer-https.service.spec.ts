import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerHttpsService } from './consumer-https.service';

describe('ConsumerHttpsService', () => {
  let service: ConsumerHttpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumerHttpsService],
    }).compile();

    service = module.get<ConsumerHttpsService>(ConsumerHttpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
