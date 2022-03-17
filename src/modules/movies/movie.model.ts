import { ObjectType, Field } from "@nestjs/graphql";
import mongoose from "mongoose";

@ObjectType()
export class Movie {
  @Field()
  title: string;

  @Field()
  description: string;
}

export const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
});
