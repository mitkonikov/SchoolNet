import "reflect-metadata";
import { Connection } from "typeorm";
import { getConnectionOrCreate } from "./database/connection";
import { Words } from "./entity/ZBOR/Words";
import { WordGenerated } from "./entity/ZBOR/WordGenerated";
import { WordDay } from "./entity/ZBOR/WordDay";
import { WordConnection } from "./entity/ZBOR/WordConnection";

import { light as Light } from "lightquery-orm";
import { ContactEntry } from "./entity/ZBOR/ContactEntry";
import { WordContribution } from "./entity/ZBOR/WordContribution";
import { StatisticsIP } from "./entity/network/StatisticsIP";
import { findOrCreate } from "./database/common";
import { WordGuestStats } from "./entity/ZBOR/WordGuestStats";

import Dynamo from "./Dynamo";

let connection: Connection;
let network: Connection;
let GuestDynamo: Dynamo;

let switchCallback = (key) => {
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

export const connect = async () => {
    connection = await getConnectionOrCreate("zbor");
    network = await getConnectionOrCreate("network");

    GuestDynamo = new Dynamo(connection, WordGuestStats);

    return connection;
}

export const light = async (req, res) => {
    let response = await Light(connection, req.body, switchCallback);
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

                await GuestDynamo.incVariableOrCreate(req.guest.ID, "wordConnections");
                res.send({ status: "success" });
            } else {
                res.send({ status: "failed" });
            }
            
            break;
        }
        case "contact": {
            let contactEntry = new ContactEntry();
            contactEntry.Contact = req.body.data.message;
            contactEntry.Student_IP = req.clientIp;

            let exists = await connection
                .getRepository(ContactEntry)    
                .find(contactEntry)

            if (exists.length === 0) {
                await connection
                    .getRepository(ContactEntry)
                    .insert(contactEntry)
                    .catch((err) => {
                        console.log(err);
                    });

                await GuestDynamo.incVariableOrCreate(req.guest.ID, "contacts");
                res.send({ status: "success" });
            } else {
                res.send({ status: "error", message: "limit" });
            }
            break;
        }
        case "flag-word": {
            let data = req.body.data;

            if (data.Mistake) {
                let contribution = new WordContribution();
                contribution.Word = data.ID;
                contribution.Type = -1;
                contribution.Mistake = true;
                contribution.Student_ID = 0;
                contribution.Student_IP = req.clientIp;

                let exists = await connection
                    .getRepository(WordContribution)    
                    .find(contribution)
            
                let success = false;
                if (exists.length === 0) {
                    let response = await connection
                        .getRepository(WordContribution)
                        .insert(contribution);

                    if (response.raw.affectedRows == 1) {
                        await GuestDynamo.incVariableOrCreate(req.guest.ID, "wordContributions");
                        res.send({ status: "success" });
                        success = true;
                    }
                }

                if (!success) {
                    res.send({ status: "error" });
                }
            } else {
                res.send({ status: "error"});
            }
            
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