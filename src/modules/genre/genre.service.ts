import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
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

  async create(input: CreateGenreInput) {
    const isExisting = await this.genreModel.find({
      name: { $regex: input.name, $options: "i" },
    });

    if (!isExisting.length) {
      const response = new this.genreModel(input);
      return response.save();
    }

    throw new HttpException(
      `${input.name} is already existing`,
      HttpStatus.EXPECTATION_FAILED,
    );
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.genreModel.findById(_id).exec();
  }

  delete(_id: MongooseSchema.Types.ObjectId) {
    return this.genreModel.deleteOne({ _id });
  }

  list(filters: ListGenreInput) {
    return this.genreModel.find({ ...filters }).sort({ name: "ascending" });
  }

  update(input: UpdateGenreInput, _id: MongooseSchema.Types.ObjectId) {
    return this.genreModel.findOneAndUpdate(
      { _id },
      { ...input },
      { new: true },
    );
  }
}
