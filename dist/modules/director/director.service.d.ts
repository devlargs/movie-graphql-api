/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Model, Schema as MongooseSchema } from "mongoose";
import { Director, DirectorDocument } from "./director.model";
import { CreateDirectorInput, ListDirectorInput } from "./director.inputs";
export declare class DirectorService {
    private directorModel;
    constructor(directorModel: Model<DirectorDocument>);
    create(input: CreateDirectorInput): Promise<Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    getById(_id: MongooseSchema.Types.ObjectId): Promise<Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    list(filters: ListDirectorInput): Promise<(Director & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
