import { Injectable } from '@nestjs/common';
import { CreateReserveDto } from './dto/createReserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Injectable()
export class ReserveService {
  createReserve(CreateReserveDto: CreateReserveDto) {
    return 'This action adds a new reserve';
  }

  deleteReserve(CreateReserveDto: CreateReserveDto) {
    return 'This action adds a new reserve';
  }

  findAll() {
    return `This action returns all reserve`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reserve`;
  }

  update(id: number, updateReserveDto: UpdateReserveDto) {
    return `This action updates a #${id} reserve`;
  }

  remove(id: number) {
    return `This action removes a #${id} reserve`;
  }
}
