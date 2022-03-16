import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AddUserInput } from "./input/addUser.input";
import { User } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User])
  users() {
    return this.userService.getUsers();
  }

  @Mutation(() => [User])
  addUser(@Args("input") input: AddUserInput) {
    return this.userService.addUser(input);
  }
}
