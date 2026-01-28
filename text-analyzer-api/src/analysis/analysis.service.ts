import { Injectable } from '@nestjs/common';
import { ANALYSIS_RULES } from './analysis.rules';

@Injectable()
export class AnalysisService {
  analyzeText(text: string): number {
    let score = ANALYSIS_RULES.baseScore;

    if (text.length > ANALYSIS_RULES.minLength) {
      score += ANALYSIS_RULES.lengthBonus;
    }

    ANALYSIS_RULES.forbiddenWords.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        score -= ANALYSIS_RULES.forbiddenPenalty;
      }
    });

    return Math.max(0, Math.min(100, score));
  }
}
