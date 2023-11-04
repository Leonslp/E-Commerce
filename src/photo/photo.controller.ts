/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './entities/photo.entity';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}
 
  @Post()
  create(@Body() photo:Photo) {
    return this.photoService.create(photo);
  }

  @Get()
  findAll() {
    return this.photoService.findAll();
  }

}
