import { IsString, MinLength, MaxLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class SignUpInput {
  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  username: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  password: string;
}

@InputType()
export class SignInInput {
  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  username: string;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  password: string;
}
