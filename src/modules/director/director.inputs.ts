import { Schema as MongooseSchema } from "mongoose";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateDirectorInput {
  @Field(() => String)
  name: string;
}

@InputType()
export class ListDirectorInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  name?: string;
}
