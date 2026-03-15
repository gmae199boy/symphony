import { Injectable } from '@nestjs/common';

// 기본 서비스: 비즈니스 로직 처리
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
