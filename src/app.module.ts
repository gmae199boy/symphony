import { Logger, Module, OnModuleInit } from '@nestjs/common';

@Module({})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);

  onModuleInit() {
    this.logger.log('AppModule has been initialized');
  }
}
