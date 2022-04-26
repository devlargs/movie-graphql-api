import { Schema as MongooseSchema } from "mongoose";
import { Movie, MovieDocument } from "./movie.model";
import { MovieService } from "./movie.service";
import { CreateMovieInput, ListMovieInput, UpdateMovieInput } from "./movie.inputs";
import { Director } from "../director/director.model";
import { Genre } from "../genre/genre.model";
import { Actor } from "../actor/actor.model";
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
    actors(movie: MovieDocument): Promise<MongooseSchema.Types.ObjectId[] | Actor[]>;
    genres(movie: MovieDocument): Promise<MongooseSchema.Types.ObjectId[] | Genre[]>;
    updateMovie(input: UpdateMovieInput, _id: MongooseSchema.Types.ObjectId): Promise<Movie & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
