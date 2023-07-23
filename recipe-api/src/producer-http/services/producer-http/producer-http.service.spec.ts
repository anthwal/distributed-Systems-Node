import { Test, TestingModule } from '@nestjs/testing';
import { ProducerHttpService } from './producer-http.service';

describe('ProducerHttpService', () => {
  let service: ProducerHttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerHttpService],
    }).compile();

    service = module.get<ProducerHttpService>(ProducerHttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
