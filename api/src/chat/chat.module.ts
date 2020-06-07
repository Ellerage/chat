import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageRepository } from 'src/messages/message.repository';
import { AuthRepository } from 'src/auth/auth.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MessageRepository, AuthRepository])],
  providers: [ChatGateway],
})
export class ChatModule {}
