import { ObjectType, Field } from "@nestjs/graphql";
import mongoose from "mongoose";

@ObjectType()
export class User {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  age: number;

  @Field()
  _id?: string;
}

export const UserSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
  },
  {
    timestamps: true,
  },
);
