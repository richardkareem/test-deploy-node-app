import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() body: any): string{
    const {name} = body;
    return this.appService.postHelloName(name)
  }

  @Post('/query')
  postHelloQuery(@Query('name') name:string) : string {
    return this.appService.postHelloName(name)
  }
}
