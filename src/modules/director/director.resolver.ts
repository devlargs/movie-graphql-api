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

  @Mutation(() => [Director])
  addDirector(@Args("input") input: AddDirectorInput) {
    return this.directorService.addDirector(input);
  }

  @Mutation(() => [DirectorUpdated])
  updateDirector(
    @Args("input") input: UpdateDirectorInput,
    @Args("id") id: string,
  ) {
    this.directorService.updateDirector(id, input);
    return { data: true };
  }
}
