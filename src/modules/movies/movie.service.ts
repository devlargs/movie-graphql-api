import { Injectable } from "@nestjs/common";
import { Movie } from "./movie.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MovieService {
  constructor(@InjectModel("Movie") private movieModel: Model<Movie>) {}

  async getMovies() {
    const result = await this.movieModel.find();
    return result;
  }

  async addMovie(movie: Movie) {
    const newMovie = new this.movieModel({ ...movie });
    const response = await newMovie.save();
    return [{ ...response.toJSON() }];
  }
}
