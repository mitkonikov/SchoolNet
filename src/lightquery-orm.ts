import { Connection } from "typeorm";

export const light = async (connection: Connection, model, switchCallback: Function) => {
    let keys = Object.keys(model);
    let result = { };

    if (typeof keys != "object") {
        return {};
    }

    for (let key of keys) {
        if (typeof key != "string") continue;

        let WHERE = false;
        let qinput: Array<string>;
        let winput: any;

        if (typeof model[key].length == "undefined") {
            qinput = model[key].select;
            winput = model[key].where;

            if (typeof winput != "undefined") WHERE = true;
        } else {
            qinput = model[key];
            winput = { };
        }
        
        let repo = switchCallback(key);

        if (!repo.failed) {
            let temp = repo.repository.getRepository().metadata.columns;
            let columnNames = {};
            for (let t of temp) {
                columnNames[t.propertyName] = t.type;
            }

            let queries = [];
            for (let i = 0; i < qinput.length; ++i) {
                if (typeof columnNames[qinput[i]] != "undefined") {
                    queries.push(qinput[i]);
                }
            }

            let whereQuery = [];
            if (WHERE) {
                let whereKeys = Object.keys(winput);

                for (let i = 0; i < whereKeys.length; ++i) {
                    if (typeof columnNames[whereKeys[i]] != "undefined") {
                        let whereStatement = "";
                        let whereData = { };
                        
                        if (winput[whereKeys[i]][0] === "%" || winput[whereKeys[i]][winput[whereKeys[i]].length - 1] === "%") {
                            whereStatement = whereKeys[i] + " like :" + whereKeys[i] + "param";
                            whereData[whereKeys[i] + "param"] = winput[whereKeys[i]];
                        } else {
                            whereStatement = whereKeys[i] + " = :" + whereKeys[i] + "param";
                            whereData[whereKeys[i] + "param"] = winput[whereKeys[i]];
                        }

                        whereQuery.push({
                            whereStatement,
                            whereData
                        });
                    }
                }
            }

            let limit = 10;
            if (winput && winput.limit && parseInt(winput.limit) < limit) {
                limit = winput.limit;
            }

            if (queries.length != 0) {
                try {
                    let query = await connection
                        .getRepository(repo.repository)
                        .createQueryBuilder()
                        .select(queries)

                    if (WHERE) {
                        query.where(whereQuery[0].whereStatement, whereQuery[0].whereData);
                        for (let i = 1; i < whereQuery.length; ++i) {
                            query.andWhere(whereQuery[i].whereStatement, whereQuery[i].whereData);
                        }
                    }
                        
                    result[key] = await query
                        .take(limit)
                        .execute();

                    // SQL
                    /*let query2 = await connection
                        .getRepository(repo.repository)
                        .createQueryBuilder()
                        .select(queries)

                    if (WHERE) {
                        query2.where(whereQuery[0].whereStatement, whereQuery[0].whereData);
                        for (let i = 1; i < whereQuery.length; ++i) {
                            query2.andWhere(whereQuery[i].whereStatement, whereQuery[i].whereData);
                        }
                    }
                        
                    result[key + "sql"] = await query2
                        .take(limit)
                        .getSql();*/
                } catch (err) {
                    result[key] = "error";
                    console.log(err);
                }
            }
        } else {
            result[key] = "not a repository";
        }
    }

    return result;
}