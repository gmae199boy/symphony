import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

// /hello 기능 모듈
@Module({
  controllers: [HelloController],
  providers: [HelloService],
})
export class HelloModule {}
