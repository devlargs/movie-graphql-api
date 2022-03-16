import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddUserInput {
  @Field({ description: "First Name" })
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: number;
}

export class UpdateUserInput extends AddUserInput {}
