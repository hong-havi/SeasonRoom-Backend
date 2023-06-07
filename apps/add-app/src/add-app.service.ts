import { Injectable } from '@nestjs/common';

@Injectable()
export class AddAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
