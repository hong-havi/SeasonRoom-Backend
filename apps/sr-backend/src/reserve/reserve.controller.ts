import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { ReserveService } from './reserve.service';
import { CreateReserveDto } from './dto/createReserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Controller('reserve')
@ApiTags('2.IF - Reserve API')
export class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  @Post('room/create')
  @ApiOperation({
    summary: '입방 등록',
    description: '입방 등록'
  })
  createInRoom(@Body() CreateReserveDto: CreateReserveDto) {
    return this.reserveService.createReserve(CreateReserveDto);
  }

  @Post('room/cancel')
  @ApiOperation({
    summary: '입방 취소',
    description: '입방 취소'
  })
  deleteInRoom(@Body() CreateReserveDto: CreateReserveDto) {
    return this.reserveService.deleteReserve(CreateReserveDto);
  }

  @Post('event')
  @ApiOperation({
    summary: '이벤트 등록',
    description: '입방 외 방 이벤트 등록g'
  })
  createEvent(@Body() createReserveDto: CreateReserveDto) {
    return this.reserveService.createReserve(createReserveDto);
  }

  @Delete('event/:eventid')
  @ApiOperation({
    summary: '이벤트 삭제',
    description: '이벤트 삭제'
  })
  removeEvent(@Param('eventid') id: string) {
    return this.reserveService.remove(+id);
  }

  @Get()
  @ApiOperation({
    summary: '입방 기간 조회',
    description: '입방 기간 조회'
  })
  findAll() {
    return this.reserveService.findAll();
  }
}
