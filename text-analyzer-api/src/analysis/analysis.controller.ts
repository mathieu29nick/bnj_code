import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AnalysisService } from './analysis.service';
import { HistoryService } from '../history/history.service';
import { AnalyzeTextDto } from './dto/analyze-text.dto';

@Controller('api')
export class AnalysisController {
  constructor(
    private readonly analysisService: AnalysisService,
    private readonly historyService: HistoryService,
  ) {}

  @Post('analyze')
  @HttpCode(HttpStatus.OK)
  async analyze(@Body() dto: AnalyzeTextDto) {
    const score = this.analysisService.analyzeText(dto.text);
    await this.historyService.save(dto.text, score);

    return {
      score,
    };
  }
}