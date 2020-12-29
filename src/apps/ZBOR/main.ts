import { Connection } from "typeorm";
import Dynamo from "../../Dynamo";
import { Guest } from "../../entity/network/Guest";
import { ContactEntry } from "../../entity/ZBOR/ContactEntry";
import { WordConnection } from "../../entity/ZBOR/WordConnection";
import { WordContribution } from "../../entity/ZBOR/WordContribution";

export default class ZborAPI {
    connection: Connection;
    GuestDynamo: Dynamo;

    constructor(connection: Connection, GuestDynamo: Dynamo) {
        this.connection = connection;
        this.GuestDynamo = GuestDynamo;
    }

    async connectWords(guest: Guest, { wordFrom, wordTo }, clientIp: string) {
        if (wordFrom == wordTo) {
            return { status: "failed" };
        }

        let wordConnection = new WordConnection();
        wordConnection.Student_IP = clientIp;
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
                guest.ID,
                "wordConnections"
            );
            return { status: "success" };
        }

        return { status: "failed" };
    }

    async contact(guest: Guest, { message }, clientIp: string) {
        let contactEntry = new ContactEntry();
        contactEntry.Contact = message;
        contactEntry.Student_IP = clientIp;

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

            await this.GuestDynamo.incVariableOrCreate(guest.ID, "contacts");
            return { status: "success" };
        } else {
            return { status: "error", message: "limit" };
        }
    }

    async flagWord(guest: Guest, data, clientIp: string) {
        if (data.Mistake) {
            let contribution = new WordContribution();
            contribution.Word = data.ID;
            contribution.Type = -1;
            contribution.Mistake = true;
            contribution.Student_IP = clientIp;

            let exists = await this.connection
                .getRepository(WordContribution)    
                .find(contribution)
        
            if (exists.length === 0) {
                let response = await this.connection
                    .getRepository(WordContribution)
                    .insert(contribution);

                if (response.raw.affectedRows == 1) {
                    await this.GuestDynamo.incVariableOrCreate(guest.ID, "wordContributions");
                    return { status: "success" };
                }
            }
        }

        return { status: "error" };
    }

    async likeGeneratedWord(guest: Guest, data) {
        
    }
}
