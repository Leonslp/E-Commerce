import { PartialType } from '@nestjs/mapped-types';
import { CreateOuthDto } from './create-outh.dto';

export class UpdateOuthDto extends PartialType(CreateOuthDto) {}
