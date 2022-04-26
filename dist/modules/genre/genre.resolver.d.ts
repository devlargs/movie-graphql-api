/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Schema as MongooseSchema } from "mongoose";
import { Genre } from "./genre.model";
import { GenreService } from "./genre.service";
import { CreateGenreInput, ListGenreInput, UpdateGenreInput } from "./genre.inputs";
export declare class GenreResolver {
    private genreService;
    constructor(genreService: GenreService);
    genre(_id: MongooseSchema.Types.ObjectId): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    genres(filters?: ListGenreInput): Promise<(Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createGenre(input: CreateGenreInput): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    deleteGenre(_id: MongooseSchema.Types.ObjectId): Promise<boolean>;
    updateGenre(input: UpdateGenreInput, id: MongooseSchema.Types.ObjectId): Promise<Genre & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
