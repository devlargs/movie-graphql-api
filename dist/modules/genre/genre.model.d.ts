/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from "mongoose";
export declare class Genre {
    _id: MongooseSchema.Types.ObjectId;
    name: string;
    color: string;
}
export declare type GenreDocument = Genre & Document;
export declare const GenreSchema: MongooseSchema<Document<Genre, any, any>, import("mongoose").Model<Document<Genre, any, any>, any, any, any>, any, any>;
