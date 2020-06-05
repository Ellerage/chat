import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '214470',
  database: 'chat',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: true,
};
