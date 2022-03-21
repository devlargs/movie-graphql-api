/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from "mongoose";
import { Director } from "../director/director.model";
import { Genre } from "../genre/genre.model";
export declare class Movie {
    _id: MongooseSchema.Types.ObjectId;
    title: string;
    directors: MongooseSchema.Types.ObjectId[] | Director[];
    genres: MongooseSchema.Types.ObjectId[] | Genre[];
    imageUrl: string;
}
export declare type MovieDocument = Movie & Document;
export declare const MovieSchema: MongooseSchema<Document<Movie, any, any>, import("mongoose").Model<Document<Movie, any, any>, any, any, any>, any, any>;
