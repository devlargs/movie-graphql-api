/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { User } from "./user.model";
import { Model } from "mongoose";
import { User as UserSchema } from "./user.model";
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserSchema>);
    getUsers(): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: string;
    })[]>;
    addUser(user: User): Promise<{
        firstName: string;
        lastName: string;
        age: number;
        _id: string;
        __v?: any;
        id?: any;
    }[]>;
}
