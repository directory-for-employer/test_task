import { IsString } from 'class-validator';

export class CreateAppDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
