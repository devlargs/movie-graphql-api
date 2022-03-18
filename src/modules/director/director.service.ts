import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Director, DirectorDocument } from "./director.model";
import { CreateDirectorInput, ListDirectorInput } from "./director.inputs";

@Injectable()
export class DirectorService {
  constructor(
    @InjectModel(Director.name) private directorModel: Model<DirectorDocument>,
  ) {}

  create(payload: CreateDirectorInput) {
    const createdDirector = new this.directorModel(payload);
    return createdDirector.save();
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.directorModel.findById(_id).exec();
  }

  list(filters: ListDirectorInput) {
    return this.directorModel.find({ ...filters }).exec();
  }
}
