import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRepository } from './message.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository])],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
