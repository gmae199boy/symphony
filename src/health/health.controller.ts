import { Controller, Get } from '@nestjs/common';
import { HealthService } from './health.service';

// 헬스체크 컨트롤러: GET /health 요청 처리
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  check(): { status: string } {
    return this.healthService.check();
  }
}
