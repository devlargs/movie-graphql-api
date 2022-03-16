import { Injectable } from "@nestjs/common";
import { User } from "./user.model";

@Injectable()
export class UserService {
  private users: User[] = [
    {
      firstName: "Jac",
      lastName: "Call me",
      age: 20,
    },
  ];

  getUsers() {
    return this.users;
  }
}
