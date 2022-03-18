import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";

@ObjectType()
@Schema()
export class Director {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  name: string;
}

export type DirectorDocument = Director & Document;

export const DirectorSchema = SchemaFactory.createForClass(Director);
