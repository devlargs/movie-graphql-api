import { ObjectType, Field } from "@nestjs/graphql";
import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@ObjectType()
export class Director {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  biography: string;

  @Field()
  id?: string;
}

@ObjectType()
export class DirectorUpdated {
  @Field()
  updated: boolean;

  // @Field()
  // id: string;
}

// export const DirectorSchema = new mongoose.Schema(
//   {
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     biography: String,
//   },
//   {
//     timestamps: true,
//   },
// );

@Schema()
class DirectorHehe {
  _id: mongoose.Schema.Types.ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  biography: string;
}

export type DirectorDocument = DirectorHehe & Document;
export const DirectorSchema = SchemaFactory.createForClass(DirectorHehe);
