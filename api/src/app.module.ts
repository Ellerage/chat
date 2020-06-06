import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MessageModule } from './messages/message.module';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MessageModule, AuthModule, ChatModule],
})
export class AppModule {}
