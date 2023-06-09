import { PartialType } from '@nestjs/swagger';
import { CreateReserveDto } from './createReserve.dto';

export class UpdateReserveDto extends PartialType(CreateReserveDto) {}
