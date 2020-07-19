import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { ResultSingInPayload } from './dto/result-sign-in';
import { ValidationPipe } from '@nestjs/common';
import { SignInInput, SignUpInput } from './dto/auth.inputs';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query((): typeof Boolean => Boolean, {
    name: 'test',
    description: 'Just test query',
  })
  test() {
    return true;
  }

  @Mutation((): typeof Boolean => Boolean, {
    name: 'signUp',
    description: 'Create new user',
  })
  async signUp(
    @Args('input', new ValidationPipe()) input: SignUpInput,
  ): Promise<boolean> {
    return this.authService.signUp(input);
  }

  @Mutation((): typeof ResultSingInPayload => ResultSingInPayload, {
    name: 'signIn',
    description: 'Log in and get access token',
  })
  async signIn(
    @Args('input') input: SignInInput,
  ): Promise<ResultSingInPayload> {
    return this.authService.signIn(input);
  }
}

// @Query((): typeof User => User, {
//   name: 'me',
//   description: 'Get me',
// })
// async getMe(@CurrentUserGQL() user: User) {
//   console.log(user, 123);
//   return null;
// }
