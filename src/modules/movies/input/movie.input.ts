import { Field, InputType } from "@nestjs/graphql";
import mongoose from "mongoose";
import { Director } from "src/modules/director/director.model";

@InputType()
export class AddMovieInput {
  @Field(() => String)
  title: string;

  // @Field(() => [String], { nullable: false })
  @Field(() => [String], { nullable: false })
  directorIds: string[];
}
