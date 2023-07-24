import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerHttpService } from './consumer-http.service';

describe('ConsumerHttpService', () => {
  let service: ConsumerHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumerHttpService],
    }).compile();

    service = module.get<ConsumerHttpService>(ConsumerHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
