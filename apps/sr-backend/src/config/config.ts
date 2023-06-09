import { SwaggerConfig } from './swagger';
//import * as session from 'express-session';

export default () => ({
  swagger: SwaggerConfig()
  /*,
  session: <session.SessionOptions>{
    key: process.env.SESSION_COOKIE_KEY || 'session-cookie-key',
    secret: process.env.SESSION_SECRET || 'session-secret', // sessionID 암호화 키
    resave: false, // session 변경 되지 않아도 저장
    proxy: process.env.SESSION_PROXY === 'true',
    saveUninitialized: false, // 초기화 되지 않은 세션 설정
    cookie: {
      domain: process.env.SESSION_COOKIE_DOMAIN,
      httpOnly: true,
      maxAge: Number(process.env.SESSION_AGE || 3600000),
      secure: process.env.SESSION_COOKIE_SECURE === 'true',
      sameSite: 'lax'
    }
  },
  redis: {
    url: `redis://${process.env.DB_REDIS_HOST}:${process.env.DB_REDIS_PORT}`
  },
  redisStore: {
    ttl: Number(process.env.SESSION_AGE || 3600000) / 1000,
    prefix: 'pa-admin:session:'
  }*/
});
