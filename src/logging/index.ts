/**
 * This module is only used for debugging the Journal module
 */

import path from 'path';
import Journal from './Journal';

const LOG_FILE = "../../log.txt";
const LOG_LOCATION = path.join(__dirname, LOG_FILE);

let journal = new Journal();
journal.startWatch(LOG_LOCATION, (filename, data) => {
    console.log(filename, data);
});