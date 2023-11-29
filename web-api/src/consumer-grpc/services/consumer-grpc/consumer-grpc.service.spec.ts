import { Test, TestingModule } from '@nestjs/testing';
import { ConsumerGrpcService } from './consumer-grpc.service';

describe('ConsumerGrpcService', () => {
  let service: ConsumerGrpcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumerGrpcService],
    }).compile();

    service = module.get<ConsumerGrpcService>(ConsumerGrpcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
