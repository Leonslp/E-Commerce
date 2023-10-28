import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { DatabaseModule } from '../database/database.module';
import { PhotoController } from './photo.controller';

@Module({
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
