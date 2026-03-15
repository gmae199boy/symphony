import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 루트 모듈: 애플리케이션의 진입 모듈
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
