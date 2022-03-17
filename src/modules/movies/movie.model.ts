import { ObjectType, Field } from "@nestjs/graphql";
import mongoose from "mongoose";
import { Director, DirectorSchema } from "../director/director.model";

@ObjectType()
export class Movie {
  @Field()
  title: string;

  @Field(() => [Director])
  directors: Director[];
}

export const MovieSchema = new mongoose.Schema({
  title: String,
  description: String,
  directors: [DirectorSchema],
});
