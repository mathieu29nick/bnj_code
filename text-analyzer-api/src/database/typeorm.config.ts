import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.MONGO_URI,
  database: process.env.MONGO_DB,
  autoLoadEntities: true,
  synchronize: true,
};
