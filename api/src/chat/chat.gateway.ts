import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageRepository } from 'src/messages/message.repository';
import { ValidationPipe, Body } from '@nestjs/common';
import { AuthRepository } from 'src/auth/auth.repository';
import { Message } from 'src/messages/message.entity';
import { CreateMessageChatDto } from './dto/create-message.dto';

@WebSocketGateway(4000, { namespace: 'ws' })
export class ChatGateway implements OnGatewayConnection {
  constructor(
    private messageRepository: MessageRepository,
    private authRepository: AuthRepository,
  ) {}

  @WebSocketServer()
  server: Server;

  async handleConnection() {
    const messages = await this.getMessages();

    this.server.emit('init', messages);
  }

  @SubscribeMessage('create')
  async createMessage(
    @Body(ValidationPipe) @MessageBody() data: CreateMessageChatDto,
  ) {
    const author = await this.authRepository.findOne(data.authorId);
    console.log(author);
    await this.messageRepository.createMessage({ author, text: data.text });

    const messages = await this.getMessages();
    this.server.emit('init', messages);
  }

  async getMessages(): Promise<Message[]> {
    const query = this.messageRepository
      .createQueryBuilder('message')
      .leftJoinAndSelect('message.author', 'user');

    return await query.getMany();
  }
}
