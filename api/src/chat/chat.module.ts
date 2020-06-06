import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRepository } from 'src/messages/message.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository])],
  providers: [ChatGateway],
})
export class ChatModule {}
