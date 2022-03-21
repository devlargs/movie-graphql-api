import { Schema as MongooseSchema } from "mongoose";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateDirectorInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  imageUrl: string;
}

@InputType()
export class ListDirectorInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  imageUrl?: string;
}
