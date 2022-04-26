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
import {
  CreateMovieInput,
  ListMovieInput,
  UpdateMovieInput,
} from "./movie.inputs";
import { Director } from "../director/director.model";
import { Genre } from "../genre/genre.model";
import { Actor } from "../actor/actor.model";

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
  async createMovie(@Args("input") input: CreateMovieInput) {
    return this.movieService.create(input);
  }

  @ResolveField(() => [Director])
  async directors(@Parent() movie: MovieDocument) {
    await movie.populate({ path: "directors", model: Director.name });
    return movie.directors;
  }

  @ResolveField(() => [Actor])
  async actors(@Parent() movie: MovieDocument) {
    await movie.populate({ path: "actors", model: Actor.name });
    return movie.actors;
  }

  @ResolveField(() => [Genre])
  async genres(@Parent() movie: MovieDocument) {
    await movie.populate({ path: "genres", model: Genre.name });
    return movie.genres;
  }

  @Mutation(() => Movie)
  async updateMovie(
    @Args("input") input: UpdateMovieInput,
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.movieService.updateOne(input, _id);
  }
}
