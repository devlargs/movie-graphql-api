import { Schema as MongooseSchema } from "mongoose";
export declare class CreateDirectorInput {
    firstName: string;
    lastName: string;
    imageUrl: string;
}
export declare class UpdateDirectorInput {
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
}
export declare class ListDirectorInput {
    _id?: MongooseSchema.Types.ObjectId;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
}
