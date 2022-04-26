import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { Actor, ActorSchema } from "./actor.model";
import { ActorService } from "./actor.service";
import { ActorResolver } from "./actor.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),
  ],
  providers: [ActorService, ActorResolver],
})
export class ActorModule {}
