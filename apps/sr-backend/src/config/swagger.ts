import { DocumentBuilder } from '@nestjs/swagger';
import { TSwaggerConfig } from './config.type';

/**
 * Swagger Config
 *
 */
export function SwaggerConfig() {
  return <TSwaggerConfig>{
    config: new DocumentBuilder()
      .setTitle(`Season Room API swagger - ${process.env.NODE_ENV}`)
      .setDescription('시즌방 입방관리 API')
      .setVersion('1.0')
      //.addCookieAuth(process.env.SESSION_COOKIE_KEY || 'session-cookie-key')
      .build(),
    options: {
      //extraModels: [Dto]
    },
    customOptions: {
      swaggerOptions: {
        docExpansion: 'list', // Swagger 문서 펼침여부 String=["list"*, "full", "none"]
        tagsSorter: 'alpha' // 정렬 순서
      }
    }
  };
}
