import { Entity, ObjectIdColumn, Column } from 'typeorm';
import { ObjectId } from 'mongodb';

@Entity('analysis_history')
export class AnalysisHistory {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  text: string;

  @Column()
  score: number;

  @Column()
  createdAt: Date;
}