import { Field, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreateGenreInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  color: string;
}

@InputType()
export class ListGenreInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  name: string;

  @Field(() => String)
  color: string;
}
