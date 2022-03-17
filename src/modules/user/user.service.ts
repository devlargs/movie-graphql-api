import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User as UserSchema } from "./user.model";

@Injectable()
export class UserService {
  constructor(@InjectModel("User") private userModel: Model<UserSchema>) {}

  async getUsers() {
    const result = await this.userModel.find();
    return result;
  }

  async addUser(user: User) {
    const newUser = new this.userModel({ ...user });
    const response = await newUser.save();
    return [{ ...response.toJSON() }];
  }
}
