import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AddMovieInput } from "./input/movie.input";
import { Movie } from "./movie.model";
import { MovieService } from "./movie.service";

@Resolver(() => Movie)
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query(() => [Movie])
  movies() {
    return this.movieService.getMovies();
  }

  @Mutation(() => [Movie])
  addMovie(@Args("input") input: AddMovieInput) {
    console.log(input);
    // const temp = {...input, };
    // delete temp.directorIds

    return this.movieService.addMovie({
      title: input.title,
      directors: input.directorIds,
    });
  }
}
