import { Module } from '@nestjs/common';
import { OuthService } from './outh.service';
import { OuthController } from './outh.controller';

@Module({
  controllers: [OuthController],
  providers: [OuthService],
})
export class OuthModule {}
