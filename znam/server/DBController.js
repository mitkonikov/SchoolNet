let databases;
let ZNAMDB;

let Connect = function(databases_connect) {
    databases = databases_connect;
    ZNAMDB = databases.ZNAM;
}

let contribute = (user, data, callback) => {
    if (typeof data.subject === "undefined" || 
        typeof data.answers === "undefined") {
        callback({ status: "error" });
        return;
    }

    if (data.question.length > 150) {
        callback({ status: "error" });
        return;
    }

    for (let i = 0; i < 4; ++i) {
        if (data.answers[i].length > 150) {
            callback({ status: "error" });
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
        Truth: 0,
        Origin: JSON.stringify({
            User: user
        }),
    }

    console.log(entry);

    if (typeof data.Difficulty === "undefined")
        entry.Difficulty = 1500;
    else
        entry.Difficulty = data.Difficulty;

    ZNAMDB.query("INSERT INTO tbl_questions SET ?", entry, (err, rows) => {
        callback({ status: "success" });
    });
}

module.exports = {
    contribute,
    ZNAMDB
}

module.exports.Connect = Connect;