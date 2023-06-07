import { Controller } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  /**
   * @Get()
  findAll(): string {
      return 1
  }
  */
}
