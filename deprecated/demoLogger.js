
/**
 * Each level is written to the demo file on the system
 * @param {String}      current_demo_path 
 * @param {Number}      level 
 * @param {Function}    callback 
 */
let getLevelInfo = (current_demo_path, level, callback) => {
    fs.readFile(current_demo_path, {encoding: 'utf8'}, (err, demo_data) => {
        // parse the demo
        let thisDemo = JSON.parse(demo_data);

        callback(thisDemo.game[level]);
    });
}