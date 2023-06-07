import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UsersModule } from './users/users.module';
import { ReserveModule } from './reserve/reserve.module';

@Module({
  imports: [UsersModule, ReserveModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
