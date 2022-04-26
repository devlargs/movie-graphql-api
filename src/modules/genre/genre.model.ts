import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Field, ObjectType } from "@nestjs/graphql";
import { Document, Schema as MongooseSchema } from "mongoose";

@ObjectType()
@Schema({ timestamps: true })
export class Genre {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String, { description: "Gago" })
  @Prop({
    required: true,
    unique: true,
    index: {
      unique: true,
    },
  })
  name: string;

  @Field(() => String)
  @Prop()
  color: string;
}

export type GenreDocument = Genre & Document;

export const GenreSchema = SchemaFactory.createForClass(Genre);
