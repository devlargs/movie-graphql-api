/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Movie, MovieDocument } from "./movie.model";
import { CreateMovieInput, ListMovieInput, UpdateMovieInput } from "./movie.inputs";
export declare class MovieService {
    private movieModel;
    constructor(movieModel: Model<MovieDocument>);
    create(input: CreateMovieInput): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListMovieInput): import("mongoose").Query<(Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[], Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, MovieDocument>;
    updateOne(input: UpdateMovieInput, _id: MongooseSchema.Types.ObjectId): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
