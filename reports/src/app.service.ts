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
    const tableData: ITableData[] = [
      { title: `${dto.title}`, content: `${dto.content}` },
    ];
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet(`${dto.tableTitle}`);
    worksheet.columns = [
      { key: 'title', header: 'Title' },
      { key: 'content', header: 'Content' },
    ];

    // Take data on the list
    tableData.forEach((item) => {
      worksheet.addRow(item);
    });

    //Add data into DataBase
    const data_id = await this.prisma.data_customer.create({
      data: {
        title: dto.title,
        tableTitle: dto.tableTitle,
        content: dto.content,
      },
    });
    const { id } = data_id;

    // Save data on file
    const exportPath = path.join(
      __dirname,
      '../..',
      '/public',
      `${dto.tableTitle}_${id}.xlsx`,
    );

    await workbook.xlsx.writeFile(exportPath);
    return { id: id, url: `/uploads/${dto.tableTitle}_${id}.xlsx` };
  }

  async take_data(id: number) {
    return this.prisma.data_customer.findFirst({ where: { id } });
  }
}
