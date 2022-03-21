import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";

import { Director } from "../director/director.model";
import { Genre } from "../genre/genre.model";

@ObjectType()
@Schema()
export class Movie {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  title: string;

  @Field(() => [Director])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Director.name })
  directors: MongooseSchema.Types.ObjectId[] | Director[];

  @Field(() => [Genre])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Genre.name })
  genres: MongooseSchema.Types.ObjectId[] | Genre[];
}

export type MovieDocument = Movie & Document;

export const MovieSchema = SchemaFactory.createForClass(Movie);
