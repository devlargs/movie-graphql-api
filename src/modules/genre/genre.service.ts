import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Genre, GenreDocument } from "./genre.model";
import { CreateGenreInput, ListGenreInput } from "./genre.inputs";

@Injectable()
export class GenreService {
  constructor(
    @InjectModel(Genre.name) private genreModel: Model<GenreDocument>,
  ) {}

  create(input: CreateGenreInput) {
    const response = new this.genreModel(input);
    return response.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.genreModel.findById(_id).exec();
  }

  list(filters: ListGenreInput) {
    return this.genreModel.find({ ...filters }).exec();
  }
}
