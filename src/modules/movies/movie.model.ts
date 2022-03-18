import { ObjectType, Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Director, DirectorSchema } from "../director/director.model";

@ObjectType()
export class Movie {
  @Field()
  title: string;

  @Field(() => [String])
  // directors: mongoose.Schema.Types.ObjectId[];
  directors: string[];
}

@Schema()
export class MovieHehe {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  title: string;

  // @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: Director.name })
  // directors: mongoose.Schema.Types.ObjectId[];
  @Prop()
  directors: string[];
}

export type MovieDocument = MovieHehe & Document;
export const MovieSchema = SchemaFactory.createForClass(MovieHehe);
