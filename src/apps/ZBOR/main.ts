import { Connection } from "typeorm";
import Dynamo from "../../Dynamo";
import { ContactEntry } from "../../entity/ZBOR/ContactEntry";
import { WordConnection } from "../../entity/ZBOR/WordConnection";
import { WordContribution } from "../../entity/ZBOR/WordContribution";
import { WordGuestStats } from "../../entity/ZBOR/WordGuestStats";
import { IExpress, IRequest } from "../../types";

export default class ZborAPI {
    connection: Connection;
    GuestDynamo: Dynamo;

    constructor(connection: Connection, GuestDynamo: Dynamo) {
        this.connection = connection;
        this.GuestDynamo = GuestDynamo;
    }

    async getUser(req: IRequest) {
        // This query method is used to update the Statistics as well
        if (req.isAuthenticated()) {
            // If the user is authenticated, send the basic info with the response
            return {
                user: {
                    isAuth: true,
                    clientIp: req.clientIp,
                    basic: {
                        Display_Name: req.user.Display_Name
                    }
                }
            };
        } else {
            // Otherwise, get the Guest Statistics and send them.
            let result = { };
            if (req.guest) {
                let object = new WordGuestStats();
                object.User_ID = req.guest.ID;
    
                let vars = await this.connection
                    .getRepository(WordGuestStats)
                    .find(object)
    
                if (vars.length !== 0) {
                    for (let v of vars) {
                        result[v.Variable] = v.Data;
                    }
                }
            }

            return {
                user: {
                    isAuth: false,
                    clientIp: req.clientIp,
                },
                stats: result
            }
        }
    }

    async connectWords(auth: IExpress, { wordFrom, wordTo }) {
        if (wordFrom == wordTo) {
            return { status: "failed" };
        }

        let wordConnection = new WordConnection();
        wordConnection.Student_IP = auth.req.clientIp;
        wordConnection.wordFrom = wordFrom;
        wordConnection.wordTo = wordTo;

        let exists = await this.connection
            .getRepository(WordConnection)
            .find(wordConnection);

        if (exists.length === 0) {
            await this.connection
                .getRepository(WordConnection)
                .insert(wordConnection)
                .catch((err) => {
                    console.log(err);
                });

            await this.GuestDynamo.incVariableOrCreate(
                auth.req, auth.res,
                "wordConnections"
            );
            return { status: "success" };
        }

        return { status: "failed" };
    }

    async contact(auth: IExpress, { message }) {
        let contactEntry = new ContactEntry();
        contactEntry.Contact = message;
        contactEntry.Student_IP = auth.req.clientIp;

        let exists = await this.connection
            .getRepository(ContactEntry)
            .find(contactEntry);

        if (exists.length === 0) {
            await this.connection
                .getRepository(ContactEntry)
                .insert(contactEntry)
                .catch((err) => {
                    console.log(err);
                });

            await this.GuestDynamo.incVariableOrCreate(auth.req, auth.res, "contacts");
            return { status: "success" };
        } else {
            return { status: "error", message: "limit" };
        }
    }

    async flagWord(auth: IExpress, data) {
        if (data.Mistake) {
            let contribution = new WordContribution();
            contribution.Word = data.ID;
            contribution.Type = -1;
            contribution.Mistake = true;
            contribution.Student_IP = auth.req.clientIp;

            let exists = await this.connection
                .getRepository(WordContribution)    
                .find(contribution)
        
            if (exists.length === 0) {
                let response = await this.connection
                    .getRepository(WordContribution)
                    .insert(contribution);

                if (response.raw.affectedRows == 1) {
                    await this.GuestDynamo.incVariableOrCreate(auth.req, auth.res, "wordContributions");
                    return { status: "success" };
                }
            }
        }

        return { status: "error" };
    }

    async likeGeneratedWord(auth: IExpress, data) {
        
    }
}
