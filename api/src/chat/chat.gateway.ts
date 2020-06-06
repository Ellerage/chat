import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageRepository } from 'src/messages/message.repository';
import { CreateMessageDto } from 'src/messages/dto/create-message.dto';
import { ValidationPipe, Body } from '@nestjs/common';

@WebSocketGateway(4000, { namespace: 'api' })
export class ChatGateway implements OnGatewayConnection {
  constructor(private messageRepository: MessageRepository) {}

  @WebSocketServer()
  server: Server;

  async handleConnection() {
    const messages = await this.messageRepository.find();
    this.server.emit('init', messages);
  }

  @SubscribeMessage('create')
  async createMessage(
    @Body(ValidationPipe) @MessageBody() data: CreateMessageDto,
  ) {
    await this.messageRepository.createMessage(data);

    const messages = await this.messageRepository.find();
    this.server.emit('init', messages);
  }
}
