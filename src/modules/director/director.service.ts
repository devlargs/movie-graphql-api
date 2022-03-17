import { Injectable } from "@nestjs/common";
import { Director } from "./director.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class DirectorService {
  constructor(
    @InjectModel("Director") private directorModel: Model<Director>,
  ) {}

  async getDirectors() {
    const result = await this.directorModel.find();
    return result;
  }

  async addDirector(director: Director) {
    const newDirector = new this.directorModel({ ...director });
    const response = await newDirector.save();
    return [{ ...response.toJSON() }];
  }

  async updateDirector(id: string, director: Director) {
    try {
      const response = await this.directorModel.findOneAndUpdate(
        { _id: id },
        director,
      );
      return response;
    } catch (ex) {
      console.log(ex);
      return false;
    }
  }
}
