import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
import { ResultSignIn } from './dto/result-signin';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private userRepository: AuthRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<boolean> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<ResultSignIn> {
    const username = await this.userRepository.validateUserPassword(
      authCredentialsDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid cred');
    }

    const payload: JwtPayload = { username };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
