import { Test, TestingModule } from '@nestjs/testing';
import { OuthService } from './outh.service';

describe('OuthService', () => {
  let service: OuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OuthService],
    }).compile();

    service = module.get<OuthService>(OuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
