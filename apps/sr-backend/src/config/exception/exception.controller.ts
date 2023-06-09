import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SWAGGER_RESPONSE } from './default-exception';

@ApiTags('Exception Fail Info')
@Controller('exception')
export class ExceptionController {
  @ApiOperation({
    summary: 'Exception Fail Info'
  })
  @ApiResponse(SWAGGER_RESPONSE[401])
  @ApiResponse(SWAGGER_RESPONSE[403])
  @ApiResponse(SWAGGER_RESPONSE[404])
  @Get()
  exception() {
    throw new Error('test');
  }
}
