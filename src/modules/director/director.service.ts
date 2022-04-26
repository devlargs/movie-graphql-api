import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Director, DirectorDocument } from "./director.model";
import {
  CreateDirectorInput,
  ListDirectorInput,
  UpdateDirectorInput,
} from "./director.inputs";
import { GenericObject } from "src/types";

@Injectable()
export class DirectorService {
  constructor(
    @InjectModel(Director.name) private directorModel: Model<DirectorDocument>,
  ) {}

  async create(input: CreateDirectorInput) {
    const isExisting = await this.directorModel.find({
      firstName: { $regex: input.firstName, $options: "i" },
      lastName: { $regex: input.lastName, $options: "i" },
    });

    if (!isExisting.length) {
      const createdDirector = new this.directorModel(input);
      return createdDirector.save();
    }

    throw new HttpException(
      `${input.firstName} ${input.lastName} is already existing`,
      HttpStatus.EXPECTATION_FAILED,
    );
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.directorModel.findById(_id).exec();
  }

  list(filters: ListDirectorInput) {
    return this.directorModel.find({ ...filters }).exec();
  }

  updateOne(input: UpdateDirectorInput, _id: MongooseSchema.Types.ObjectId) {
    return this.directorModel.findOneAndUpdate(
      { _id },
      { ...input },
      {
        new: true,
      },
    );
  }
}
