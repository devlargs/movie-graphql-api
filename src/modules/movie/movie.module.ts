import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Movie, MovieSchema } from "./movie.model";
import { MovieService } from "./movie.service";
import { MovieResolver } from "./movie.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  providers: [MovieService, MovieResolver],
})
export class MovieModule {}
