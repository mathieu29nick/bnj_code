import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb://localhost:27017',
  database: 'text_analyzer',
  autoLoadEntities: true,
  synchronize: true,
};
