import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository])],
})
export class MessageModule {}
