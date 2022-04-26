import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";

import { Actor, ActorDocument } from "./actor.model";
import {
  CreateActorInput,
  ListActorInput,
  UpdateActorInput,
} from "./actor.inputs";

@Injectable()
export class ActorService {
  constructor(
    @InjectModel(Actor.name) private actorModel: Model<ActorDocument>,
  ) {}

  async create(input: CreateActorInput) {
    const isExisting = await this.actorModel.find({
      firstName: { $regex: input.firstName, $options: "i" },
      lastName: { $regex: input.lastName, $options: "i" },
    });

    if (!isExisting.length) {
      const createdActor = new this.actorModel(input);
      return createdActor.save();
    }

    throw new HttpException(
      `${input.firstName} ${input.lastName} is already existing`,
      HttpStatus.EXPECTATION_FAILED,
    );
  }

  getById(_id: MongooseSchema.Types.ObjectId) {
    return this.actorModel.findById(_id).exec();
  }

  list(filters: ListActorInput) {
    return this.actorModel.find({ ...filters }).sort({ lastName: "ascending" });
  }

  updateOne(input: UpdateActorInput, _id: MongooseSchema.Types.ObjectId) {
    return this.actorModel.findOneAndUpdate(
      { _id },
      { ...input },
      {
        new: true,
      },
    );
  }
}
