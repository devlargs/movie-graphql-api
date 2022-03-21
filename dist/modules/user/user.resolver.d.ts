/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose" />
import { AddUserInput } from "./input/addUser.input";
import { User } from "./user.model";
import { UserService } from "./user.service";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    users(): Promise<(import("mongoose").Document<unknown, any, User> & User & {
        _id: string;
    })[]>;
    addUser(input: AddUserInput): Promise<{
        firstName: string;
        lastName: string;
        age: number;
        _id: string;
        __v?: any;
        id?: any;
    }[]>;
}
