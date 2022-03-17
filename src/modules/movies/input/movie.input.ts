import { Field, InputType } from "@nestjs/graphql";
import { Director } from "src/modules/director/director.model";

@InputType()
export class AddMovieInput {
  @Field()
  title: string;

  @Field(() => [Director])
  directors: Director[];
}
