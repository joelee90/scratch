import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

// Module is going to wrap up a controller.
@Module({
  controllers: [AppController],
})
export class AppModule {}
