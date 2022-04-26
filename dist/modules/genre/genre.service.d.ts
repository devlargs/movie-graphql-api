/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Genre, GenreDocument } from "./genre.model";
import { CreateGenreInput, ListGenreInput, UpdateGenreInput } from "./genre.inputs";
import { GenericObject } from "src/types";
export declare class GenreService {
    private genreModel;
    constructor(genreModel: Model<GenreDocument>);
    create(input: CreateGenreInput): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    delete(_id: MongooseSchema.Types.ObjectId): import("mongoose").Query<import("mongodb").DeleteResult, Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, GenreDocument>;
    list(filters: ListGenreInput): Promise<(Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    find(filters: GenericObject): Promise<(Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    update(input: UpdateGenreInput, _id: MongooseSchema.Types.ObjectId): import("mongoose").Query<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, GenreDocument>;
}
