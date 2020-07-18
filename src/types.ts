import { Request } from "express";

export interface IRequest extends Request {
    user: any;
    guest: any;
    isAuthenticated: Function;
    logIn: Function;
    logout: Function;
    clientIp: string;
}

export interface IDatabases {
    db_net: any;
    db_words: any;
    db_records: any;
    db_znam: any;
}