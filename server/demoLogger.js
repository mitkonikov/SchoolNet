/**
 * @description This module should be the bridge
 * between the games and their demos
 */

let fs = require("fs");

/**
 * Function that creates the main .json demo file
 * @param {*} Game_ID   Game_ID
 * @param {*} Room_ID   Room_ID
 */
function createDemoJSON(demo_path, demo_table, template, Game_ID, Room_ID) {
    // This function first checks if there's a demo
    // and if there isnt one, it creates it
    
    let current_demo_path = demo_path + demo_table + ".json";
    fs.access(current_demo_path, fs.F_OK, (err) => {
        if (err) {
            // file doesnt exist
            fs.copyFile(template, current_demo_path, (err) => {
                if (err) {
                    console.log("error copying template : " + err);
                } else {
                    // file now exists
                    
                    // log the basic header
                    //  - read the demo
                    fs.readFile(current_demo_path, {encoding: 'utf8'}, (err, demo_data) => {
                        // parse the demo
                        let thisDemo = JSON.parse(demo_data);
    
                        // write the Game_ID and Room_ID
                        thisDemo.header.Game_ID = Game_ID;
                        thisDemo.header.Room_ID = Room_ID;
    
                        // write it
                        fs.writeFile(current_demo_path, JSON.stringify(thisDemo), 'utf-8', (err) => {
                            if (err) console.log("error writing header to demo");
                        });
                    });
                }
            });
        }
    });
}

let setUpDemo = (obj, Game_ID, Room_ID, callback) => {
    createDemoJSON(obj.demo_path, obj.demo_table, obj.template, Game_ID, Room_ID);
}

let getDemoFile = (APIKey, current_demo_path, callback) => {
    fs.readFile(current_demo_path, {encoding: 'utf8'}, (err, demo_data) => {
        if (err) { 
            console.trace("error reading demo file");
            return;
        }
        
        // callback with parsed data
        callback(JSON.parse(demo_data));
    });
}

let getLevelInfo = (current_demo_path, level, callback) => {
    fs.readFile(current_demo_path, {encoding: 'utf8'}, (err, demo_data) => {
        // parse the demo
        let thisDemo = JSON.parse(demo_data);

        callback(thisDemo.game[level]);
    });
}

let log = (params) => {
    
}

let finishLog = (APIKey, current_demo_path, callback) => {
    fs.readFile(current_demo_path, {encoding: 'utf8'}, (err, demo_data) => {
        // parse the demo
        let thisDemo = JSON.parse(demo_data);

        for (let row of rows) {
            thisDemo.log.push(row);
        }

        // write it
        obj.fs.writeFile(current_demo_path, JSON.stringify(thisDemo), 'utf-8', (err) => {
            if (err) {
                console.log("error writing header to demo");
                return;
            }

            callback(true);
        });
    });
}

module.exports.setUpDemo = setUpDemo;
module.exports.getDemoFile = getDemoFile;
module.exports.log = log;
module.exports.finishLog = finishLog;