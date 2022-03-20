import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Director } from "./director.model";
import { DirectorService } from "./director.service";
import { CreateDirectorInput, ListDirectorInput } from "./director.inputs";

@Resolver(() => Director)
export class DirectorResolver {
  constructor(private directorService: DirectorService) {}

  @Query(() => Director)
  async director(
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.directorService.getById(_id);
  }

  @Query(() => [Director])
  async directors(
    @Args("filters", { nullable: true }) filters?: ListDirectorInput,
  ) {
    return this.directorService.list(filters);
  }

  @Mutation(() => Director)
  async createDirector(@Args("payload") payload: CreateDirectorInput) {
    return this.directorService.create(payload);
  }
}
