import { Injectable } from '@nestjs/common';
import { CreateAppDto } from './dto/createApp.dto';

import * as Excel from 'exceljs';
import * as path from 'path';
import { PrismaService } from '../prisma-client/prisma.service';

interface ITableData {
  title: string;
  content: string;
}

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  async create_excel_data(dto: CreateAppDto) {
    console.log(dto);
    //   return link + id
    const tableData: ITableData[] = [
      { title: `${dto.title}`, content: `${dto.content}` },
    ];

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet(`${dto.tableTitle}`);

    worksheet.columns = [
      { key: 'title', header: 'Title' },
      { key: 'content', header: 'Content' },
    ];

    tableData.forEach((item) => {
      worksheet.addRow(item);
    });

    const data_id = await this.prisma.data_customer.create({ data: {} });
    const { id } = data_id;
    const exportPath = path.join(
      __dirname,
      '../..',
      '/excel_table',
      `${dto.tableTitle}_${id}.xlsx`,
    );
    await workbook.xlsx.writeFile(exportPath);

    // return dto;
  }

  async take_excel_data(id: number) {
    // return excel by id

    return id;
  }
}
