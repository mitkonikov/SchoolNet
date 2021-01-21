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
import { IExpress, IRequest } from "./types";
import StatisticsTracker from "./apps/StatisticsTracker";
import { WordUserStats } from "./entity/ZBOR/WordUserStats";
import GuestModule from "./auth/guest";

let connection: Connection;
let network: Connection;
let GuestDynamo: Dynamo;
let API: ZborAPI;
let statisticsTracker: StatisticsTracker;

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

export const connect = async (guestModule: GuestModule) => {
    connection = await getConnectionOrCreate("zbor");
    network = await getConnectionOrCreate("network");

    GuestDynamo = new Dynamo(connection, WordGuestStats, guestModule);
    API = new ZborAPI(connection, GuestDynamo);
    statisticsTracker = new StatisticsTracker(connection);
    statisticsTracker.add(WordGuestStats, WordUserStats);

    guestModule.pushTracker(statisticsTracker);

    return connection;
}

export const light = async (req, res) => {
    let response = await Light(connection, req.body, switchCallback);
    res.send(response);
}

export const query = async (req: IRequest, res) => {
    let authInfo = {
        req, res
    } as IExpress;

    switch(req.body.command) {
        case "connect-words": {
            res.send(await API.connectWords(authInfo, req.body.data));
            break;
        }
        case "contact": {
            res.send(await API.contact(authInfo, req.body.data));
            break;
        }
        case "flag-word": {
            res.send(await API.flagWord(authInfo, req.body.data))
            break;
        }
        case "get-user": {
            res.send(await API.getUser(req));
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
                ID: req.guest?.ID
            });
            break;
        }
        case "test-get-guest-stats": {
            let result = await GuestDynamo.getVariableOrCreate(req.guest?.ID, "testvar", "0");
            res.send(result);
            break;
        }
        case "test-set-guest-stats": {
            let result = await GuestDynamo.setVariable(req, res, "testvar", req.body.testVar);
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