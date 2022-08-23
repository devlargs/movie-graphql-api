import { Schema as MongooseSchema } from "mongoose";
export declare class CreateActorInput {
    firstName: string;
    lastName: string;
    imageUrl: string;
}
export declare class UpdateActorInput {
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    imageHashUrl?: string;
}
export declare class ListActorInput {
    _id?: MongooseSchema.Types.ObjectId;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    imageHashUrl?: string;
}
