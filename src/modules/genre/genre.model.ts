import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";

@ObjectType()
@Schema()
export class Genre {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  color: string;
}

export type GenreDocument = Genre & Document;

export const GenreSchema = SchemaFactory.createForClass(Genre);
