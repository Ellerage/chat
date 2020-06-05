import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';
import { uuid } from 'uuidv4';

@EntityRepository(User)
export class AuthRepository extends Repository<User> {
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<boolean> {
    const { username, password } = authCredentialsDto;

    const user = this.create();

    user.id = uuid();
    user.username = username;
    user.salt = await genSalt();
    user.password = await hash(password, user.salt);

    try {
      await user.save();
      return true;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('User name already exist');
      } else {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    const user = await this.findOne({ username });

    if (user && user.validatePassword(password)) {
      return user.username;
    } else {
      return null;
    }
  }
}
