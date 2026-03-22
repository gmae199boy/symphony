import { Injectable } from '@nestjs/common';

// 기본 서비스: 비즈니스 로직 처리
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // 헬스체크 상태 반환
  getHealth(): { status: string; result: boolean } {
    return { status: 'ok', result: true };
  }
}
