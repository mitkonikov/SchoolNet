import "reflect-metadata";
import { createConnection, Connection, getConnection } from "typeorm";
import { Words } from "./entity/Words";
import { WordGenerated } from "./entity/WordGenerated";
import { WordDay } from "./entity/WordDay";
import { WordConnection } from "./entity/WordConnection";

import { light as Light, lightUp, lightSwitch } from "./lightquery-orm";

let connection: Connection;

export const connect = async () => {
    try {
        connection = getConnection()
    } catch(err) {
        connection = await createConnection();
    }

    lightUp(connection);
    lightSwitch(switchCallback);
    return connection;
}

const switchCallback = (key) => {
    let repository: any;
    let failed: boolean;

    switch(key.toLowerCase()) {
        case "word":
            repository = Words;
            break;
        case "generated_word":
            repository = WordGenerated;
            break;
        case "word_of_the_day":
            repository = WordDay;
            break;
        default:
            failed = true;
            break;
    }

    return {
        repository,
        failed
    }
}

export const light = async (req, res) => {
    let response = await Light(req.body);
    res.send(response);
}

export const query = async (req, res) => {
    switch(req.body.command) {
        case "connect-words": {
            let wordID1 = req.body.data.wordFrom;
            let wordID2 = req.body.data.wordTo;

            if (wordID1 == wordID2) {
                res.send({ status: "failed" });
                return;
            }

            let wordConnection = new WordConnection();
            wordConnection.Student_IP = req.clientIp;
            wordConnection.wordFrom = wordID1;
            wordConnection.wordTo = wordID2;

            let exists = await connection
                .getRepository(WordConnection)    
                .find(wordConnection)

            if (exists.length === 0) {
                await connection
                    .getRepository(WordConnection)
                    .insert(wordConnection)
                    .catch((err) => {
                        console.log(err);
                    });

                res.send({ status: "success" });
            } else {
                res.send({ status: "failed" });
            }
            
            break;
        }
        case "contribute": {
            res.send("development");
            break;
        }
        default: {
            res.send("unregistered command");
            break;
        }
    }
}