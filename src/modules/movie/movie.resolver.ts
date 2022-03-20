import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Movie, MovieDocument } from "./movie.model";
import { MovieService } from "./movie.service";
import { CreateMovieInput, ListMovieInput } from "./movie.inputs";
import { Director } from "../director/director.model";

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query(() => Movie)
  async movie(
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.movieService.getById(_id);
  }

  @Query(() => [Movie])
  async movies(@Args("filters", { nullable: true }) filters?: ListMovieInput) {
    return this.movieService.list(filters);
  }

  @Mutation(() => Movie)
  async createMovie(@Args("payload") payload: CreateMovieInput) {
    return this.movieService.create(payload);
  }

  @ResolveField(() => [Director])
  async directors(
    @Parent() movie: MovieDocument,
    @Args("populate") populate: boolean,
  ) {
    if (populate)
      await movie.populate({ path: "directors", model: Director.name });

    return movie.directors;
  }
}
