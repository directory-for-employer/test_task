import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateAppDto } from './dto/createApp.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-excel')
  async create_excel_data(@Body() dto: CreateAppDto, @Res() res: Response) {
    const data = await this.appService.create_excel_data(dto);
    return res.json(data);
  }

  @Get('/return-excel/:id')
  take_data(@Param() id: number) {
    return this.appService.take_data(+id);
  }
}
