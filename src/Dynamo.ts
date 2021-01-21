import { Response } from "express";
import { Connection } from "typeorm";
import GuestModule from "./auth/guest";
import { IRequest } from "./types";

export default class Dynamo {
    connection: Connection;
    repository: any;
    guestModule: GuestModule;

    constructor(connection: Connection, repository: any, GuestModule: GuestModule) {
        this.connection = connection;
        this.repository = repository;
        this.guestModule = GuestModule;
    }

    /**
     * Gets a variable from the dynamic table
     * @param userId        User ID / Source
     * @param variable      The name of the variable
     * @param dataToInsert  ? Data to insert if it doesn't exist
     * @param create        ? Do we create it when it doesn't exist?
     */
    async getVariable(userId: number, variable: string, dataToInsert?: string, create?: boolean) {
        if (typeof userId == "undefined" || !userId) {
            return null;
        }

        let object = new this.repository();
        object.User_ID = userId;
        object.Variable = variable;

        let exists = await this.connection
            .getRepository(this.repository)
            .find(object)

        if (exists.length == 0) {
            // if it doesnt exist do we create it?
            if (create) {
                object.Data = dataToInsert;
                
                this.connection
                    .getRepository(this.repository)
                    .insert(object)

                return object;
            } else {
                return null;
            }
        } else {
            return exists[0];
        }
    }

    /**
     * Gets a variable from the dynamic table.
     * If the variable doesn't exist, it creates it and inserts the data.
     * @param userId        User ID / Source
     * @param variable      The name of the variable
     * @param dataToInsert  Data to insert if it doesn't exist
     */
    async getVariableOrCreate(userId: number, variable: string, dataToInsert: string) {
        return await this.getVariable(userId, variable, dataToInsert, true);
    }

    /**
     * Sets a variable in the dynamic table
     * @param req           Express Request
     * @param res           Express Response
     * @param variable      The name of the variable
     * @param dataToInsert  ? Data to insert
     * @param create        ? Do we create it when it doesn't exist?
     */
    async setVariable(req: IRequest, res: Response, variable: string, dataToInsert: string, create?: boolean) {
        // If the request object doesn't contains a guest object
        if (typeof req.guest?.ID == "undefined") {
            await this.guestModule.createGuestSession(req, res);
        }
        
        let object = new this.repository();
        object.User_ID = req.guest.ID;
        object.Variable = variable;

        let exists = await this.connection
            .getRepository(this.repository)
            .find(object)

        if (exists.length == 0) {
            if (create) {
                object.Data = dataToInsert;
                
                await this.connection
                    .getRepository(this.repository)
                    .insert(object);
            } else {
                return null;
            }
        } else {
            await this.connection
                .getRepository(this.repository)
                .update(object, { Data: dataToInsert });

            object.Data = dataToInsert;
        }

        return object;
    }

    /**
     * Sets a variable in the dynamic table.
     * If the variable doesn't exist, it creates it.
     * @param req           Express Request
     * @param res           Express Response
     * @param variable      The name of the variable
     * @param dataToInsert  Data to insert
     */
    async setVariableOrCreate(req: IRequest, res: Response, variable: string, dataToInsert: string) {
        return await this.setVariable(req, res, variable, dataToInsert, true);
    }

    /**
     * Increment a variable
     * @param req           Express Request
     * @param res           Express Response
     * @param variable      The name of the variable
     * @param incrementBy   Default = +1
     */
    async incVariable(req: IRequest, res: Response, variable: string, incrementBy?: number, create?: boolean) {
        if (typeof req.guest?.ID == "undefined") {
            await this.guestModule.createGuestSession(req, res);
        }
        
        let object = new this.repository();
        object.User_ID = req.guest.ID;
        object.Variable = variable;

        let repo: any;
        repo = this.connection
            .getRepository(this.repository)

        let exists: any;
        exists = await repo.findOne(object);

        if (!exists) {
            if (create) {
                if (typeof incrementBy != "undefined") {
                    object.Data = incrementBy.toString();
                } else {
                    object.Data = "1";
                }
                
                return await repo.insert(object);
            } else {
                return null;
            }
        } else {
            let value = parseInt(exists.Data);
            if (typeof incrementBy != "undefined") {
                value += incrementBy;
            } else {
                value++;
            }

            exists.Data = value.toString();
            return await repo.save(exists);
        }
    }

    /**
     * Increment a variable or create it if it doesn't exists
     * @param req           Express Request
     * @param res           Express Response
     * @param variable      The name of the variable
     * @param incrementBy   Default = +1
     */
    async incVariableOrCreate(req: IRequest, res: Response, variable: string, incrementBy?: number) {
        return await this.incVariable(req, res, variable, incrementBy, true);
    }

    async checkOrCreateGuest(req: IRequest, res: Response) {
        await this.guestModule.createGuestSession(req, res);
    }
}