import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';

// 헬스체크 모듈: 헬스체크 관련 컨트롤러와 서비스 등록
@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
