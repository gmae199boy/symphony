import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestJS 앱 부트스트랩
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('성공적인 부트스트랩!');
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
