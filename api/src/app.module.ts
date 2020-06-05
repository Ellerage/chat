import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MessageModule } from './messages/message.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MessageModule],
})
export class AppModule {}
