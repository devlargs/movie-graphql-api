import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { AddDirectorInput, UpdateDirectorInput } from "./input/director.input";
import { Director, DirectorUpdated } from "./director.model";
import { DirectorService } from "./director.service";

@Resolver(() => Director)
export class DirectorResolver {
  constructor(private directorService: DirectorService) {}

  @Query(() => [Director])
  directors() {
    return this.directorService.getDirectors();
  }

  @Mutation(() => Boolean)
  addDirector(@Args("input") input: AddDirectorInput) {
    const response = this.directorService.addDirector(input);
    console.log(response);
    return response;
  }

  // TODO - doesnt resolve anything
  @Mutation(() => [Director])
  async updateDirector(
    @Args("input") input: UpdateDirectorInput,
    @Args("id") id: string,
  ) {
    const response = await this.directorService.updateDirector(id, input);
    return response;
  }
}
