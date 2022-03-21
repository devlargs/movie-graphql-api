/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Genre, GenreDocument } from "./genre.model";
import { CreateGenreInput, ListGenreInput } from "./genre.inputs";
export declare class GenreService {
    private genreModel;
    constructor(genreModel: Model<GenreDocument>);
    create(input: CreateGenreInput): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListGenreInput): Promise<(Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
