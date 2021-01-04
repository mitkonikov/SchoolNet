import { Connection, EntitySchema } from "typeorm";
import { BaseStats } from "../entity/network/BaseStats";
import { Guest } from "../entity/network/Guest";
import { User } from "../entity/network/User";

export default class StatisticsTracker {
    connection: Connection;
    links: [
        {
            from: EntitySchema<unknown>;
            to: EntitySchema<unknown>;
        }
    ];

    /**
     * This module links Guest and User repositories and
     * allows to transfer statistics from the Guest to the User repos.
     * @param connection TypeORM Connection
     */
    constructor(connection: Connection) {
        this.connection = connection;
    }

    /**
     * It binds two repositories, so we can easily
     * transfer statistical data from the guest to the user
     * when the user logins for the first time.
     * @param from Statistical Repository that contains User_ID (this is the Guest_ID)
     * @param to Statistical Repository that container User_ID
     */
    add(from: EntitySchema<unknown>, to: EntitySchema<unknown>) {
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
     * @param user User object
     */
    async transfer(guest: Guest, user: User) {
        // For every subscribed link, we check if
        // there are guest statistics in the guest session
        for (let link of this.links) {
            let query = await this.connection
                .getRepository(link.from)
                .find({ User_ID: guest.ID }) as BaseStats[];

            if (query.length > 0) {
                let stats = [];
                for (const item of query) {
                    let entry = new (link.to as any)();
                    entry.User_ID = user.ID;
                    entry.Variable = item.Variable;
                    entry.Data = item.Data;
                    stats.push(entry);
                }

                // TODO: We need to test whether we have already moved the stats
                this.connection
                    .getRepository(link.to)
                    .insert(stats);
            }
        }
    }
}