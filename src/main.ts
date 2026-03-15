import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestJS 애플리케이션 부트스트랩
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('동작중!');
  console.log('동작중!');
  console.log('NestJS 부트스트랩 초기화 완료');
  await app.listen(3000);
  console.log('애플리케이션이 포트 3000에서 실행 중입니다.');
}
bootstrap();
