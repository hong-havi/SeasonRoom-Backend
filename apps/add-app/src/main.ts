import { NestFactory } from '@nestjs/core';
import { AddAppModule } from './add-app.module';

async function bootstrap() {
  const app = await NestFactory.create(AddAppModule);
  await app.listen(3000);
}
bootstrap();
