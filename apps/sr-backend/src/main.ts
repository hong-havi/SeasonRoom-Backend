import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TSwaggerConfig } from './config/config.type';
import { ConfigService } from '@nestjs/config';

import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });
  const Config = app.get(ConfigService); //Env config get

  //setupSwagger(app);
  const swaggerConfig = <TSwaggerConfig>Config.get('swagger');
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig.config,
    swaggerConfig.options
  );
  SwaggerModule.setup('api-docs', app, document, swaggerConfig.customOptions);

  await app.listen(Config.get('HTTP_PORT') || 3101);
}

bootstrap();
