import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Movie, MovieDocument } from "./movie.model";
import {
  CreateMovieInput,
  ListMovieInput,
  UpdateMovieInput,
} from "./movie.inputs";

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name) private movieModel: Model<MovieDocument>,
  ) {}

  async create(input: CreateMovieInput) {
    const isExisting = await this.movieModel.find({
      title: {
        $regex: input.title,
        $options: "i",
      },
    });

    if (isExisting.length) {
      throw new HttpException(
        `${input.title} is already existing`,
        HttpStatus.EXPECTATION_FAILED,
      );
    }

    const createdMovie = new this.movieModel(input);
    return createdMovie.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.movieModel.findById(_id).exec();
  }

  list(filters: ListMovieInput) {
    return this.movieModel.find({ ...filters }).sort({ title: "ascending" });
  }

  updateOne(input: UpdateMovieInput, _id: MongooseSchema.Types.ObjectId) {
    return this.movieModel.findOneAndUpdate(
      { _id },
      { ...input },
      {
        new: true,
      },
    );
  }
}
