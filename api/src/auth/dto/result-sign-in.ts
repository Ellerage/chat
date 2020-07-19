import { Field, ObjectType } from '@nestjs/graphql';

export class ResultSignInDto {
  accessToken: string;
}

@ObjectType()
export class ResultSingInPayload {
  @Field()
  accessToken: string;
}
