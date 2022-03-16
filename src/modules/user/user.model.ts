import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: number;
}
