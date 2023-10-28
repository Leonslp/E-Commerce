import { Injectable } from '@nestjs/common';
import { CreateOuthDto } from './dto/create-outh.dto';
import { UpdateOuthDto } from './dto/update-outh.dto';

@Injectable()
export class OuthService {
  create(createOuthDto: CreateOuthDto) {
    return 'This action adds a new outh';
  }

  findAll() {
    return `This action returns all outh`;
  }

  findOne(id: number) {
    return `This action returns a #${id} outh`;
  }

  update(id: number, updateOuthDto: UpdateOuthDto) {
    return `This action updates a #${id} outh`;
  }

  remove(id: number) {
    return `This action removes a #${id} outh`;
  }
}
