/**
 * @description This module should be the bridge
 * between the games and their demos
 */

let fs = require("fs");
let MSD = "./server";
let templateDir = MSD + "/template_demos/";
let demo_path = MSD + "/demos/";

let network;
let built = false;

let buildDemoLogger = (network_connect) => {
    if (!built) {
        network = network_connect;
        built = true;
    }
}

/**
 * Function that creates the main .json demo file
 * @param {*} Game_ID   Game_ID
 * @param {*} Room_ID   Room_ID
 */
function createDemoJSON(demo_table, template, Game_ID, Room_ID) {
    // This function first checks if there's a demo
    // and if there isnt one, it creates it
    
    let current_demo_path = demo_path + demo_table + ".json";
    fs.access(current_demo_path, fs.F_OK, (err) => {
        if (err) {
            // demo file for the current game doesnt exist
            
            // try to access the template demo
            fs.access(template, fs.F_OK, (err) => {
                
                if (err) {
                    console.trace("Template demo for Game_ID = " + Game_ID + " doesn't exist!");
                }
                
                // copy the template
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
            });
        }
    });
}

let setUpDemo = (Demo_ID, Game_ID, Room_ID, callback) => {
    // find the name of the demo template
    network.query("SELECT Template_Demo FROM tbl_games WHERE ID = ?", Game_ID, (err, rows) => {
        let templateDemo = templateDir + rows[0].Template_Demo + ".json";
    
        createDemoJSON(Demo_ID, templateDemo, Game_ID, Room_ID);
    });
}

/**
 * Just reads the demo file from the system
 */
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

/**
 * When every game finishes you should call the finishLog function
 * to write to the demo file and close the logging process
 */
let finishLog = (APIKey, record_rows, current_demo_path, callback) => {
    fs.readFile(current_demo_path, {encoding: 'utf8'}, (err, demo_data) => {
        // parse the demo
        let thisDemo = JSON.parse(demo_data);

        for (let row of record_rows) {
            thisDemo.log.push(row);
        }

        // write it
        fs.writeFile(current_demo_path, JSON.stringify(thisDemo), 'utf-8', (err) => {
            if (err) {
                console.log("error writing header to demo");
                return;
            }

            callback(true);
        });
    });
}

module.exports.buildDemoLogger = buildDemoLogger;
module.exports.setUpDemo = setUpDemo;
module.exports.getDemoFile = getDemoFile;
module.exports.finishLog = finishLog;