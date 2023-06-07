import { Controller, Get } from '@nestjs/common';
import { AddAppService } from './add-app.service';

@Controller()
export class AddAppController {
  constructor(private readonly addAppService: AddAppService) {}

  @Get()
  getHello(): string {
    return this.addAppService.getHello();
  }
}
