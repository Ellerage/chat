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

@WebSocketGateway(8080, { namespace: 'api' })
export class ChatGateway implements OnGatewayConnection {
  constructor(private messageRepository: MessageRepository) {}

  @WebSocketServer()
  server: Server;

  async handleConnection() {
    const messages = await this.messageRepository.find();
    this.server.emit('init', messages);
  }

  @SubscribeMessage('create')
  async createMessage(@MessageBody() data: CreateMessageDto) {
    await this.messageRepository.createMessage(data);

    const messages = await this.messageRepository.find();
    this.server.emit('init', messages);
  }
}
