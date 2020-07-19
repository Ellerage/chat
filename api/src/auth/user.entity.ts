import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import { hash } from 'bcryptjs';
import { Message } from 'src/messages/message.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@Unique(['username'])
@ObjectType()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  salt: string;

  @OneToMany(
    type => Message,
    message => message.author,
  )
  messages: Message[];

  async validatePassword(password: string): Promise<boolean> {
    return (await hash(password, this.salt)) === this.password;
  }
}
