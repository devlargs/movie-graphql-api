import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";

@ObjectType()
@Schema({ timestamps: true })
export class Actor {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  firstName: string;

  @Field(() => String)
  @Prop()
  lastName: string;

  @Field(() => String)
  @Prop()
  imageUrl: string;
}

export type ActorDocument = Actor & Document;

export const ActorSchema = SchemaFactory.createForClass(Actor);
