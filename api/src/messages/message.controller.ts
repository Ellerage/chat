import { Controller, Get } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './message.entity';

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Get()
  getMessages(): Promise<Message[]> {
    return this.messageService.getMessages();
  }
}
