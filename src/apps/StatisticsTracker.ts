import { Connection, EntitySchema } from "typeorm";
import { BaseStats } from "../entity/network/BaseStats";
import { Guest } from "../entity/network/Guest";
import { IUser } from "../types";

export default class StatisticsTracker {
    connection: Connection;
    links: [
        {
            from: EntitySchema<unknown>;
            to: EntitySchema<unknown>;
        }?
    ] = [];

    /**
     * This module links Guest and User repositories and
     * allows to transfer statistics from the Guest to the User repos.
     * It works on only one connection, so if you have different connections
     * you need to have different Statistical Trackers.
     * @param connection TypeORM Connection
     */
    constructor(connection: Connection) {
        this.connection = connection;
    }

    /**
     * It binds two repositories, so we can easily
     * transfer statistical data from the **guest** to the **user**
     * when the user logins for the first time.
     * Both the repositories must contain User_ID, Variable and Data.
     * @param from - **Guest** repository
     * @param to - **User** repository
     */
    add(from: any, to: any) {
        this.links.push({
            from,
            to,
        });
    }

    /**
     * If a new user logins in and we have statistics left over
     * from the guest session, we want those statistics to be transferred
     * 
     * We only use the ID of both the object parameters.
     * @param guest Guest object
     * @param user IUser object because we don't need the database entity
     */
    async transfer(guest: Guest, user: IUser) {
        // For every subscribed link, we check if
        // there are guest statistics in the guest session
        for (let link of this.links) {
            let query = await this.connection
                .getRepository(link.from)
                .find({ User_ID: guest.ID }) as BaseStats[];

            if (query.length > 0) {
                for (const item of query) {
                    let object = new (link.to as any)();
                    object.User_ID = user.ID;
                    object.Variable = item.Variable;

                    // We search if that user has a statistic named with the same variable
                    let duplicate = await this.connection
                        .getRepository(link.to)
                        .find(object) as BaseStats[];

                    // If he doesn't have it, then we create it
                    if (duplicate.length == 0) {
                        let entry = new (link.to as any)();
                        entry.User_ID = user.ID;
                        entry.Variable = item.Variable;
                        entry.Data = item.Data;

                        // And insert it into the database
                        this.connection
                            .getRepository(link.to)
                            .insert(entry)
                            .catch((reason) => console.log(reason));
                    } else {
                        // TODO: Maybe depend this on a parameter
                        this.connection
                            .getRepository(link.to)
                            .update(object, { Data: duplicate[0].Data + item.Data })
                            .catch((reason) => console.log(reason));
                    }
                }
            }
        }
    }
}