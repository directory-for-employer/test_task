import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-excel')
  create_excel_data() {
    return this.appService.create_excel_data();
  }

  @Get('/return-excel')
  take_excel_data() {
    return this.appService.take_excel_data();
  }
}
