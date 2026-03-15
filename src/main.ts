import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// NestJS 앱 부트스트랩
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
