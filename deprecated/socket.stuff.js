fs.access(demo_table, fs.F_OK, (err) => {
    if (err) {
        // file doesnt exist
        fs.copyFile(template, demo_table, (err) => {
            if (err) {
                console.log("error copying template : " + err);
            } else {
                // file now exists
                
                // log the basic header
                //  - read the demo
                fs.readFile(demo_table, {encoding: 'utf8'}, (err, data) => {
                    // parse the demo
                    let thisDemo = JSON.parse(data);

                    // write the Game_ID and Room_ID
                    thisDemo.header.Game_ID = rows[0].ID;
                    thisDemo.header.Room_ID = rows[0].Room_ID;

                    // write it
                    fs.writeFile(demo_table, JSON.stringify(thisDemo), 'utf-8', (err) => {
                        if (err) console.log("error writing header to demo");
                        else {
                            // log that the teacher has joined
                            let logData = {Source: "teacher", Command: "join", Data: null};
                            logDemo(fs, demo_table, logData);
                        }
                    });
                });
            }
        });
    } else {
        // file already exists
        let logData = {Source: "teacher", Command: "join", Data: null};
        logDemo(fs, demo_table, logData);
    }
});

/**
 * Log data to the demo (depricated)
 * @param {*}           fs          File System Module
 * @param {String}      demo_table  The path to the demo
 * @param {JSON}        logData     The data to log
 * @param {Function}    callback    [Callback function]
 */
/*function logDemo(fs, demo_table, logData, callback) {
    // read the demo
    fs.readFile(demo_table, {encoding: 'utf8'}, (err, data) => {
        if (err) {
            console.log("error reading the demo");
            return;
        }

        // parse the demo
        let thisDemo = JSON.parse(data);

        // write the time
        logData.time = getTime();

        // push the new log data
        thisDemo.log.push(logData);

        // write it
        fs.writeFile(demo_table, JSON.stringify(thisDemo), 'utf-8', (err) => {
            if (err) console.log("error writing to demo");

            if (callback && typeof(callback) === "function") {
                callback();
            }
        });
    });
}*/