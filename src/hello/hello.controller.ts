import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

// GET /hello 요청 처리
@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.helloService.getHello();
  }
}
