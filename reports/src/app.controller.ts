import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateAppDto } from './dto/createApp.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-excel')
  create_excel_data(@Body() dto: CreateAppDto) {
    return this.appService.create_excel_data(dto);
  }

  @Get('/return-excel/:id')
  take_excel_data(@Param('id') id: number) {
    return this.appService.take_excel_data(+id);
  }
}
