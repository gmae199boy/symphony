import { Injectable } from '@nestjs/common';

// /hello 엔드포인트의 비즈니스 로직 처리
@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello!';
  }
}
