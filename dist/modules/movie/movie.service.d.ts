import { Model, Schema as MongooseSchema } from "mongoose";
import { Movie, MovieDocument } from "./movie.model";
import { CreateMovieInput, ListMovieInput } from "./movie.inputs";
export declare class MovieService {
    private movieModel;
    constructor(movieModel: Model<MovieDocument>);
    create(input: CreateMovieInput): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListMovieInput): Promise<(Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
