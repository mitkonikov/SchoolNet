import "reflect-metadata";
import { createConnection, Connection, getConnection } from "typeorm";

import { light as Light } from "./lightquery-orm";
import { Question } from "./entity/ZNAM/Question";

let connection: Connection;

let switchCallback = (key) => {
    let repository: any;
    let failed: boolean;

    switch(key.toLowerCase()) {
        default:
            failed = true;
            break;
    }

    return {
        repository,
        failed
    }
}

export const connect = async () => {
    try {
        connection = getConnection("znam")
    } catch(err) {
        connection = await createConnection("znam");
    }

    return connection;
}

export const light = async (req, res) => {
    let response = await Light(connection, req.body, switchCallback);
    res.send(response);
}

export const query = async (req, res) => {
    switch(req.body.command) {
        case "get-verify-question": {
            let question = await connection
                .getRepository(Question)
                .find({ Valid: false, Verified: false });

            if (question.length == 0) {
                res.send({ status: "empty" });
            } else {
                res.send(question[0]);
            }

            break;
        }
        case "set-verify-question": {
            let data = req.body.data;

            let question = await connection
                .getRepository(Question)
                .update({ ID: data.ID }, { Valid: data.Valid, Verified: true });

            res.send({ status: "success" });
            break;
        }
        default: {
            res.send({ status: "error" });
            break;
        }
    }
}

export const update = async (req, res) => {
    res.send({ status: "error" });
}