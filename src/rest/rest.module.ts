import { Module } from '@nestjs/common';
import { MyControllerController } from './my-controller/my-controller.controller';

@Module({
  controllers: [MyControllerController]
})
export class RestModule {}
