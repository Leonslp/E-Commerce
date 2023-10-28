import { Test, TestingModule } from '@nestjs/testing';
import { OuthController } from './outh.controller';
import { OuthService } from './outh.service';

describe('OuthController', () => {
  let controller: OuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OuthController],
      providers: [OuthService],
    }).compile();

    controller = module.get<OuthController>(OuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
