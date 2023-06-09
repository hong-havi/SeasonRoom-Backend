import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './config/config';
import { ConfigModule } from './config/config.module';

import { ExceptionController } from './config/exception/exception.controller';
import { AppController } from './app.controller';

import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ReserveModule } from './reserve/reserve.module';

@Module({
  imports: [
    NestConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    ConfigModule,
    UserModule,
    ReserveModule
  ],
  controllers: [AppController, ExceptionController],
  providers: [AppService]
})
export class AppModule {}
