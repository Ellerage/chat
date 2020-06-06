import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  author: string;

  @Column()
  text: string;
}
