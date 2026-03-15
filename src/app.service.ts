import { Injectable } from '@nestjs/common';

// 기본 서비스
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
