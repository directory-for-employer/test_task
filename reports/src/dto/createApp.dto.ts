import { IsString } from 'class-validator';

export class CreateAppDto {
  @IsString()
  tableTitle: string;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
