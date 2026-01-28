import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`,
  database: process.env.MONGO_DB,
  autoLoadEntities: true,
  synchronize: true,
};