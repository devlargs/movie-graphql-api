import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Genre, GenreDocument } from "./genre.model";
import {
  CreateGenreInput,
  ListGenreInput,
  UpdateGenreInput,
} from "./genre.inputs";
import { GenericObject } from "src/types";

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

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.genreModel.deleteOne({ _id });
  }

  list(filters: ListGenreInput) {
    return this.genreModel.find({ ...filters }).exec();
  }

  find(filters: GenericObject) {
    return this.genreModel.find({ ...filters }).exec();
  }

  update(input: UpdateGenreInput, _id: MongooseSchema.Types.ObjectId) {
    return this.genreModel.findOneAndUpdate(
      { _id },
      { ...input },
      { new: true },
    );
  }
}
