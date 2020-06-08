import { Controller, Get } from '@nestjs/common';

@Controller('api/messages')
export class MessagesController {
  @Get()
  async getMessages() {
    return 'test string';
  }
}
