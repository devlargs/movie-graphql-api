/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from "mongoose";
export declare class Actor {
    _id: MongooseSchema.Types.ObjectId;
    firstName: string;
    lastName: string;
    imageUrl: string;
    imageHashUrl: string;
}
export declare type ActorDocument = Actor & Document;
export declare const ActorSchema: MongooseSchema<Document<Actor, any, any>, import("mongoose").Model<Document<Actor, any, any>, any, any, any>, any, any>;
