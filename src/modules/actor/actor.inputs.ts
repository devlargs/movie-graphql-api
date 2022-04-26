import { Schema as MongooseSchema } from "mongoose";
import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateActorInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  imageUrl: string;
}

@InputType()
export class UpdateActorInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  imageUrl?: string;
}

@InputType()
export class ListActorInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  imageUrl?: string;
}
