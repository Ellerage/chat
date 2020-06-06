import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageRepository } from 'src/messages/message.repository';

@WebSocketGateway(8080, { namespace: 'api' })
export class ChatGateway implements OnGatewayConnection {
  constructor(private messageRepository: MessageRepository) {}

  @WebSocketServer()
  server: Server;

  async handleConnection() {
    const messages = await this.messageRepository.find();
    this.server.emit('init', messages);
  }
}
