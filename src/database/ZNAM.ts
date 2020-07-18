import { IDatabases } from "../types";
import { RateLimiterMySQL } from 'rate-limiter-flexible';

let databases;
let ZNAMDB;
let rateLimiter, rateLimiterContact;

export const Connect = function(databases_connect: IDatabases, limiter) {
    databases = databases_connect;
    ZNAMDB = databases.db_znam;

    let options = limiter.opts;
    options.points = 10;
    options.duration = 3600;
    
    rateLimiter = new RateLimiterMySQL(options, limiter.ready);

    options.points = 3;
    options.duration = 3600;

    rateLimiterContact = new RateLimiterMySQL(options, limiter.ready);
}

export const contact = (user, ip, data, callback) => {
    let consumer = user;

    if (typeof user === "undefined") {
        consumer = ip;
    }

    rateLimiterContact.consume(user).then(() => {
        if (typeof data.message === "undefined") {
            callback({ status: "error", message: "empty" });
            return;
        }

        if (data.message.length > 300) {
            callback({ status: "error", message: "constrains" });
            return;
        }

        let entry = {
            Student_ID: user,
            Message: data.message
        };

        ZNAMDB.query("INSERT INTO tbl_contact SET ?", entry, () => {
            callback({ status: "success" });
        });
    }).catch(() => {
        callback({ status: "error", message: "limit" });
    });
}

export const contribute = (user, data, callback) => {
    rateLimiter.consume(user).then(() => {
        if (typeof data.subject === "undefined" || 
            typeof data.answers === "undefined") {
            callback({ status: "error", message: "empty" });
            return;
        }

        if (data.question.length > 150) {
            callback({ status: "error", message: "constrains" });
            return;
        }

        for (let i = 0; i < 4; ++i) {
            if (data.answers[i].length > 150) {
                callback({ status: "error", message: "constrains" });
                return;
            }
        }

        let entry = {
            Subject: data.subject,
            Question: data.question,
            Answer_1: data.answers[0],
            Answer_2: data.answers[1],
            Answer_3: data.answers[2],
            Answer_4: data.answers[3],
            Valid: 0,
            Truth: 0,
            Difficulty: 1500,
            Origin: JSON.stringify({
                User: user
            }),
        }

        if (typeof data.Difficulty !== "undefined") {
            entry.Difficulty = data.Difficulty;
        }

        ZNAMDB.query("INSERT INTO tbl_questions SET ?", entry, (err, rows) => {
            ZNAMDB.query("UPDATE tbl_student_stats SET Contributions = Contributions + 1 WHERE Student_ID = ?", user, () => {
                callback({ status: "success" });
            });
        });
    }).catch(() => {
        callback({ status: "error", message: "limit" });
    });
}