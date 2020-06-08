import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResultSignIn } from './dto/result-signin';
import { AuthCredentialsDto } from './dto/auth.credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { DEFAULT_STRATEGY } from 'src/common/constants';
import { CurrentUser } from './get-user-decorator';
import { User } from './user.entity';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<boolean> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto,
  ): Promise<ResultSignIn> {
    return this.authService.signIn(authCredentialsDto);
  }

  @UseGuards(AuthGuard(DEFAULT_STRATEGY))
  @Post('/me')
  getMe(@CurrentUser() user: User): User {
    return user;
  }
}
