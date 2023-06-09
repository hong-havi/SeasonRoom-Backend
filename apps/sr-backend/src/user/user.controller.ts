import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('1.IF - User API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: '유저 등록',
    description: '유저 등록'
  })
  createUser(@Body() createReserveDto: CreateUserDto) {
    return this.userService.createUser(createReserveDto);
  }
}
