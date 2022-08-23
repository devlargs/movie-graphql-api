import { Schema as MongooseSchema } from "mongoose";
export declare class CreateMovieInput {
    title: string;
    directors: MongooseSchema.Types.ObjectId[];
    genres: MongooseSchema.Types.ObjectId[];
    imageUrl: string;
    actors: MongooseSchema.Types.ObjectId[];
}
export declare class ListMovieInput {
    _id?: MongooseSchema.Types.ObjectId;
    title?: string;
    imageHashUrl?: string;
    directors: MongooseSchema.Types.ObjectId[];
    genres: MongooseSchema.Types.ObjectId[];
    imageUrl: string;
    actors: MongooseSchema.Types.ObjectId[];
}
export declare class UpdateMovieInput {
    _id?: MongooseSchema.Types.ObjectId;
    title?: string;
    directors?: MongooseSchema.Types.ObjectId[];
    genres?: MongooseSchema.Types.ObjectId[];
    imageUrl?: string;
    actors?: MongooseSchema.Types.ObjectId[];
    imageHashUrl?: string;
}
