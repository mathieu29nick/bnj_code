import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { AnalysisHistory } from './entities/analysis-history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @InjectRepository(AnalysisHistory)
    private readonly repo: MongoRepository<AnalysisHistory>,
  ) {}

  save(text: string, score: number) {
    const record = this.repo.create({
      text,
      score,
      createdAt: new Date(),
    });
    return this.repo.save(record);
  }

  findAll() {
    return this.repo.find({
      order: { createdAt: 'DESC' },
    });
  }
}
