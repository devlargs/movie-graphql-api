import mongoose from "mongoose";
export declare class User {
    firstName: string;
    lastName: string;
    age: number;
    _id?: string;
}
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, any, any>;
