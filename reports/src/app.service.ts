import { Injectable } from '@nestjs/common';
import { CreateAppDto } from './dto/createApp.dto';

import Excel from 'exceljs';
import * as path from 'path';

@Injectable()
export class AppService {
  create_excel_data(dto: CreateAppDto) {
    //   return link + id
    const workbook = new Excel.Workbook();
    const exportPath = path.resolve(__dirname, 'countries.xlsx');
    return 'user';
  }

  take_excel_data(id: number) {
    // return excel by id
    return id + 'take';
  }
}
