import { Router } from 'express';
import { Connection } from 'typeorm';
import { Word } from '../../entity/ZBOR/Word';
import { IRequest } from "./../../types";

const key = process.env.INDEX_API_KEY;

export const open = (connection: Promise<Connection>) => {
    let router = Router();
    router.post("/words", async (req: IRequest, res) => {
        if (typeof key == "undefined") {
            res.send({ status: "unauth" });
        } else {
            try {
                let data = req.body; 
                if (data.auth == key) {
                    let msg = await importWords(data["words"], connection);
                    res.send({ status: msg });
                }
            } catch (e) {
                console.log("Error: ", e);
                res.send({ status: "failed" });
                return;
            }
        }
    });

    console.log("Opened the Index API!");
    return router;
}

const importWords = async (data: { [key: string]: number }, connection: Promise<Connection>) => {
    console.log("Importing words...");
    let conn = await connection;
    for (let i in data) {
        let word = new Word();
        word.Word_Text = i;
        word.Wiki_Frq = data[i];
        await conn.getRepository(Word).insert(word)
            .catch((reason) => {
                console.log("Error: ", {
                    "word": i,
                    "reason": reason
                });
                return "failed";
            });
    }

    return "success";
}