import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Schema as MongooseSchema } from "mongoose";
import { getPlaiceholder } from "plaiceholder";
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

    const { base64 } = await getPlaiceholder(input.imageUrl);

    if (!isExisting.length) {
      const createdActor = new this.actorModel({
        ...input,
        imageHashUrl: base64,
      });
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

  async updateOne(input: UpdateActorInput, _id: MongooseSchema.Types.ObjectId) {
    const additionalData: UpdateActorInput = {};

    if (input.imageUrl) {
      const { base64 } = await getPlaiceholder(input.imageUrl);
      additionalData.imageHashUrl = base64;
    }

    return this.actorModel.findOneAndUpdate(
      { _id },
      { ...input, ...additionalData },
      {
        new: true,
      },
    );
  }
}
