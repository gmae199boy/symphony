import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestJS 앱 부트스트랩
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3000;
  await app.listen(port);
  Logger.log(`애플리케이션이 포트 ${port}에서 실행 중입니다`, 'Bootstrap');
}
bootstrap();
