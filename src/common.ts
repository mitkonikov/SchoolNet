import { Connection } from "typeorm";

export const findOrCreate = async (
        connection: Connection,
        repository: any,
        object: any
    ) => {
        let exists = await connection
            .getRepository(repository)
            .find(object);

        if (exists.length == 0) {
            connection
                .getRepository(repository)
                .insert(object)

            return object;
        } else {
            return exists[0];
        }
}