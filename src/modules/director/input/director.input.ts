import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class AddDirectorInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  biography: string;
}

@InputType()
export class UpdateDirectorInput extends AddDirectorInput {}
