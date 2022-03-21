import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Genre } from "./genre.model";
import { GenreService } from "./genre.service";
import { CreateGenreInput, ListGenreInput } from "./genre.inputs";

@Resolver(() => Genre)
export class GenreResolver {
  constructor(private genreService: GenreService) {}

  @Query(() => Genre)
  async genre(
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.genreService.getById(_id);
  }

  @Query(() => [Genre])
  async genres(@Args("filters", { nullable: true }) filters?: ListGenreInput) {
    return this.genreService.list(filters);
  }

  @Mutation(() => Genre)
  async createGenre(@Args("input") input: CreateGenreInput) {
    return this.genreService.create(input);
  }
}