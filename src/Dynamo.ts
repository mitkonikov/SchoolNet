import { Connection } from "typeorm";

export default class Dynamo {
    connection: Connection;
    repository: any;

    constructor(connection: Connection, repository: any) {
        this.connection = connection;
        this.repository = repository;
    }

    /**
     * Gets a variable in a dynamic table
     * @param userId        User ID / Source
     * @param variable      The name of the variable
     * @param dataToInsert  ? Data to insert if it doesn't exist
     * @param create        ? Do we create it when it doesn't exist?
     */
    async getVariable(userId: number, variable: string, dataToInsert?: string, create?: boolean) {
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

    async getVariableOrCreate(userId: number, variable: string, dataToInsert: string) {
        return await this.getVariable(userId, variable, dataToInsert, true);
    }

    /**
     * Sets a variable in a dynamic table
     * @param userId        User ID / Source
     * @param variable      The name of the variable
     * @param dataToInsert  ? Data to insert
     * @param create        ? Do we create it when it doesn't exist?
     */
    async setVariable(userId: number, variable: string, dataToInsert: string, create?: boolean) {
        let object = new this.repository();
        object.User_ID = userId;
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

    async setVariableOrCreate(userId: number, variable: string, dataToInsert: string) {
        return await this.setVariable(userId, variable, dataToInsert, true);
    }

    /**
     * Increment a variable
     * @param userId        User ID / Source
     * @param variable      The name of the variable
     * @param incrementBy   Default = +1
     */
    async incVariable(userId: number, variable: string, incrementBy?: number, create?: boolean) {
        let object = new this.repository();
        object.User_ID = userId;
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
     * @param userId        User ID / Source
     * @param variable      The name of the variable
     * @param incrementBy   Default = +1
     */
    async incVariableOrCreate(userId: number, variable: string, incrementBy?: number) {
        return await this.incVariable(userId, variable, incrementBy, true);
    }
}