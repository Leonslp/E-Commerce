import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OuthService } from './outh.service';
import { CreateOuthDto } from './dto/create-outh.dto';
import { UpdateOuthDto } from './dto/update-outh.dto';

@Controller('outh')
export class OuthController {
  constructor(private readonly outhService: OuthService) {}

  @Post()
  create(@Body() createOuthDto: CreateOuthDto) {
    return this.outhService.create(createOuthDto);
  }

  @Get()
  findAll() {
    return this.outhService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.outhService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOuthDto: UpdateOuthDto) {
    return this.outhService.update(+id, updateOuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.outhService.remove(+id);
  }
}
