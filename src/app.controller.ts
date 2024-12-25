import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuth } from './guards/jwt-auth.guard';

@Controller()
@UseGuards(JwtAuth)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.sayHello();
  }
}
