import "reflect-metadata";
import { Connection } from "typeorm";
import { getConnectionOrCreate } from "./database/connection";
import { Word } from "./entity/ZBOR/Word";
import { WordGenerated } from "./entity/ZBOR/WordGenerated";
import { WordDay } from "./entity/ZBOR/WordDay";

import { light as Light } from "lightquery-orm";
import { StatisticsIP } from "./entity/network/StatisticsIP";
import { findOrCreate } from "./database/common";
import { WordGuestStats } from "./entity/ZBOR/WordGuestStats";

import Dynamo from "./Dynamo";
import ZborAPI from "./apps/ZBOR/main";

let connection: Connection;
let network: Connection;
let GuestDynamo: Dynamo;
let API: ZborAPI;

let switchCallback = (key: string) => {
    let repository: any;
    let failed: boolean;

    switch(key.toLowerCase()) {
        case "word":
            repository = Word;
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

export const connect = async () => {
    connection = await getConnectionOrCreate("zbor");
    network = await getConnectionOrCreate("network");

    GuestDynamo = new Dynamo(connection, WordGuestStats);
    API = new ZborAPI(connection, GuestDynamo);

    return connection;
}

export const light = async (req, res) => {
    let response = await Light(connection, req.body, switchCallback);
    res.send(response);
}

export const query = async (req, res) => {
    switch(req.body.command) {
        case "connect-words": {
            res.send(await API.connectWords(req.guest, req.body.data, req.clientIp));
            break;
        }
        case "contact": {
            res.send(await API.contact(req.guest, req.body.data, req.clientIp));
            break;
        }
        case "flag-word": {
            res.send(await API.flagWord(req.guest, req.body.data, req.clientIp))
            break;
        }
        case "get-ip-stats": {
            let result = { };

            let object = new StatisticsIP();
            object.Student_IP = req.clientIp;

            let newObject: StatisticsIP;
            newObject = await findOrCreate(network, StatisticsIP, object);
            
            result["clientIp"] = newObject.Student_IP;

            res.send(result);
            break;
        }
        case "get-guest-user": {
            res.send({
                ID: req.guest.ID
            });
            break;
        }
        case "get-guest-stats": {
            let object = new WordGuestStats();
            object.User_ID = req.guest.ID;

            let vars = await connection
                .getRepository(WordGuestStats)
                .find(object)
            
            let result = { };

            if (vars.length !== 0) {
                for (let v of vars) {
                    result[v.Variable] = v.Data;
                }
            }

            let response = {
                clientIp: req.clientIp,
                stats: result
            }

            res.send(response);
            break;
        }
        case "test-get-guest-stats": {
            let result = await GuestDynamo.getVariableOrCreate(req.guest.ID, "testvar", "0");
            res.send(result);
            break;
        }
        case "test-set-guest-stats": {
            let result = await GuestDynamo.setVariable(req.guest.ID, "testvar", req.body.testVar);
            res.send(result);
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

export default {
    connect,
    light,
    query,
    update
}