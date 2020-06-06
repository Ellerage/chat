import { IsString, MinLength } from 'class-validator';

export class CreateMessageDto {
  author: string;

  @IsString()
  @MinLength(1)
  text: string;
}
