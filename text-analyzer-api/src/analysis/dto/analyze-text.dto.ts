import { IsString, MinLength } from 'class-validator';

export class AnalyzeTextDto {
  @IsString()
  @MinLength(1)
  text: string;
}