import { IsString, MinLength } from 'class-validator';

export class CreateMessageChatDto {
  authorId: string;

  @IsString()
  @MinLength(1)
  text: string;
}
