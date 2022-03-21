import { Field, InputType } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

@InputType()
export class CreateMovieInput {
  @Field(() => String)
  title: string;

  @Field(() => [String])
  directors: MongooseSchema.Types.ObjectId[];

  @Field(() => [String])
  genres: MongooseSchema.Types.ObjectId[];
}

@InputType()
export class ListMovieInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => [String], { nullable: true })
  directors?: MongooseSchema.Types.ObjectId[];

  @Field(() => [String], { nullable: true })
  genres?: MongooseSchema.Types.ObjectId[];
}
