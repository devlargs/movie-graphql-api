import { Module } from "@nestjs/common";
import { MovieResolver } from "./movie.resolver";
import { MovieService } from "./movie.service";
import { MongooseModule } from "@nestjs/mongoose";
import { MovieSchema } from "./movie.model";

@Module({
  providers: [MovieResolver, MovieService],
  imports: [
    MongooseModule.forFeature([
      {
        name: "Movie",
        schema: MovieSchema,
      },
    ]),
  ],
})
export class MovieModule {}
