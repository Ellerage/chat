import { Message } from './message.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';

@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
  async createMessage(createMessage: CreateMessageDto): Promise<Message> {
    const { author, text } = createMessage;

    const message = this.create();

    message.author = author;
    message.text = text;

    await message.save();

    return message;
  }
}
