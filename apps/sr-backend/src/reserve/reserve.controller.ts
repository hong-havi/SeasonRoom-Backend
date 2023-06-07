import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { ReserveService } from './reserve.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';

@Controller('reserve')
@ApiTags('IF - Reserve API')
export class ReserveController {
  constructor(private readonly reserveService: ReserveService) {}

  @Post()
  @ApiOperation({
    summary: '입방 등록/취소',
    description: '입방 등록/취소'
  })
  create(@Body() createReserveDto: CreateReserveDto) {
    return this.reserveService.create(createReserveDto);
  }

  @Post('event')
  @ApiOperation({
    summary: '이벤트 등록',
    description: '입방 외 방 이벤트 등록'
  })
  createEvent(@Body() createReserveDto: CreateReserveDto) {
    return this.reserveService.create(createReserveDto);
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
