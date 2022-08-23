import { Schema as MongooseSchema } from "mongoose";
import { Actor } from "./actor.model";
import { ActorService } from "./actor.service";
import { CreateActorInput, ListActorInput, UpdateActorInput } from "./actor.inputs";
export declare class ActorResolver {
    private actorService;
    constructor(actorService: ActorService);
    actor(_id: MongooseSchema.Types.ObjectId): Promise<Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    actors(filters?: ListActorInput): Promise<(Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createActor(input: CreateActorInput): Promise<Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateActor(input: UpdateActorInput, _id: MongooseSchema.Types.ObjectId): Promise<Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
