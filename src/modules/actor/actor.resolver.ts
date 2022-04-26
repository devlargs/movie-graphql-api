import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Schema as MongooseSchema } from "mongoose";

import { Actor } from "./actor.model";
import { ActorService } from "./actor.service";
import {
  CreateActorInput,
  ListActorInput,
  UpdateActorInput,
} from "./actor.inputs";

@Resolver(() => Actor)
export class ActorResolver {
  constructor(private actorService: ActorService) {}

  @Query(() => Actor)
  async actor(
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.actorService.getById(_id);
  }

  @Query(() => [Actor])
  async actors(@Args("filters", { nullable: true }) filters?: ListActorInput) {
    return this.actorService.list(filters);
  }

  @Mutation(() => Actor)
  async createActor(@Args("input") input: CreateActorInput) {
    return this.actorService.create(input);
  }

  @Mutation(() => Actor)
  async updateActor(
    @Args("input") input: UpdateActorInput,
    @Args("_id", { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.actorService.updateOne(input, _id);
  }
}
