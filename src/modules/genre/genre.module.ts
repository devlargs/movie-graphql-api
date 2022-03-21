import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Genre, GenreSchema } from "./genre.model";
import { GenreService } from "./genre.service";
import { GenreResolver } from "./genre.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema }]),
  ],
  providers: [GenreService, GenreResolver],
})
export class GenreModule {}
