import { Module } from '@nestjs/common';
import { DBConfigService } from './db-config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DBConfigService
    })
  ]
})
export class ConfigModule {}
