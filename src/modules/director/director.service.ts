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
    const response = this.directorModel.findOneAndUpdate({ _id: id }, director);
    console.log(response);
    // return result;
  }
}
