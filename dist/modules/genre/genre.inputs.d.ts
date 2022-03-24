import { Schema as MongooseSchema } from "mongoose";
export declare class CreateGenreInput {
    name: string;
    color: string;
}
export declare class UpdateGenreInput {
    name: string;
    color: string;
}
export declare class ListGenreInput {
    _id?: MongooseSchema.Types.ObjectId;
    name: string;
    color: string;
}
