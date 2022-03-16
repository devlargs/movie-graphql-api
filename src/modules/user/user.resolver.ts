import { Resolver, Query } from "@nestjs/graphql";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  users() {
    return this.userService.getUsers();
  }
}
