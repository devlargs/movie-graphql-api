/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Actor, ActorDocument } from "./actor.model";
import { CreateActorInput, ListActorInput, UpdateActorInput } from "./actor.inputs";
export declare class ActorService {
    private actorModel;
    constructor(actorModel: Model<ActorDocument>);
    create(input: CreateActorInput): Promise<Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListActorInput): import("mongoose").Query<(Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, ActorDocument>;
    updateOne(input: UpdateActorInput, _id: MongooseSchema.Types.ObjectId): import("mongoose").Query<Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Actor & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, ActorDocument>;
}
