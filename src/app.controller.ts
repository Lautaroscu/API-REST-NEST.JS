import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
@Controller('hello')
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return 'hello'
  }
}
