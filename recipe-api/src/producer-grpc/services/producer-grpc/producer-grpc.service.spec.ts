import { Test, TestingModule } from '@nestjs/testing';
import { ProducerGrpcService } from './producer-grpc.service';

describe('ProducerGrpcService', () => {
  let service: ProducerGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducerGrpcService],
    }).compile();

    service = module.get<ProducerGrpcService>(ProducerGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
