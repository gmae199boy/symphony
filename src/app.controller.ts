import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// 기본 컨트롤러: GET / 요청 처리
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /health — 헬스체크 엔드포인트
  @Get('health')
  getHealth(): { status: string; result: boolean } {
    return this.appService.getHealth();
  }
}
