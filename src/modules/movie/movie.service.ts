import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Movie, MovieDocument } from "./movie.model";
import { CreateMovieInput, ListMovieInput } from "./movie.inputs";

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  create(input: CreateMovieInput) {
    const createdMovie = new this.movieModel(input);
    return createdMovie.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.movieModel.findById(_id).exec();
  }

  list(filters: ListMovieInput) {
    return this.movieModel.find({ ...filters }).exec();
  }
}
