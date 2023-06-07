import { Module } from '@nestjs/common';
import { AddAppController } from './add-app.controller';
import { AddAppService } from './add-app.service';

@Module({
  imports: [],
  controllers: [AddAppController],
  providers: [AddAppService],
})
export class AddAppModule {}
