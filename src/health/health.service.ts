import { Injectable } from '@nestjs/common';

// 헬스체크 서비스: 애플리케이션 상태 확인 로직
@Injectable()
export class HealthService {
  check(): { status: string } {
    return { status: 'ok' };
  }
}
