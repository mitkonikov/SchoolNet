import { Request } from "express";

export interface IRequest extends Request {
    user: IUser;
    guest: any;
    clientIp: string;
}

export interface IDatabases {
    db_net: any;
    db_words: any;
    db_records: any;
    db_znam: any;
}

export interface IContext {
    user: IUser;
    guest: any;
}

export interface IUser {
    ID: number,
    // Basic Info
    Nickname: string,
    Role: number,
    Firstname: string,
    Lastname: string,
    School_ID: number,
    Email: string,
    Gender: string,
    Online: boolean,
    // OAuth Tokens
    FB_AccessToken: string,
    FB_RefreshToken: string,
    FB_ProfileName: string,
    FB_ID: string,
    G_AccessToken: string,
    G_RefreshToken: string,
    G_ProfileName: string,
    G_ID: string
}