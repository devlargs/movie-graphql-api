/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Schema as MongooseSchema } from "mongoose";
import { Director } from "./director.model";
import { DirectorService } from "./director.service";
import { CreateDirectorInput, ListDirectorInput, UpdateDirectorInput } from "./director.inputs";
export declare class DirectorResolver {
    private directorService;
    constructor(directorService: DirectorService);
    director(_id: MongooseSchema.Types.ObjectId): Promise<Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    directors(filters?: ListDirectorInput): Promise<(Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    createDirector(input: CreateDirectorInput): Promise<Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateDirector(input: UpdateDirectorInput, _id: MongooseSchema.Types.ObjectId): Promise<Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
