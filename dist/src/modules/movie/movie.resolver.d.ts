/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Schema as MongooseSchema } from "mongoose";
import { Movie, MovieDocument } from "./movie.model";
import { MovieService } from "./movie.service";
import { CreateMovieInput, ListMovieInput } from "./movie.inputs";
import { Director } from "../director/director.model";
import { Genre } from "../genre/genre.model";
export declare class MovieResolver {
    private movieService;
    constructor(movieService: MovieService);
    movie(_id: MongooseSchema.Types.ObjectId): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    movies(filters?: ListMovieInput): Promise<(Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createMovie(input: CreateMovieInput): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    directors(movie: MovieDocument): Promise<MongooseSchema.Types.ObjectId[] | Director[]>;
    genres(movie: MovieDocument): Promise<MongooseSchema.Types.ObjectId[] | Genre[]>;
}
