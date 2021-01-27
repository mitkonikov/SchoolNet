import fs from 'fs';
import path from 'path';

type Props = {
    debug?: boolean;
    readOnStart?: boolean
}

export default class Journal {
    private startMap: { [key: string]: number } = { };
    private fileReadTimes: { [key: string]: number } = { };
    private debug: boolean;
    private readOnStart: boolean;

    constructor(options?: Props) {
        this.debug = options?.debug || false;
        this.readOnStart = options?.readOnStart || false;
    }

    /**
     * Start watching log files or directories
     * @param logLocation File or Directory location of the logs
     * @param callback Callback Function with two params (filename, data)
     */
    startWatch(logLocation: string, callback: (filename: string, data: string) => void): void {
        this.debug && console.log(" > Watching log location: ", logLocation);
        
        fs.watch(logLocation, (event, filename) => {
            if (filename) {
                let filepath = path.join(logLocation, filename);
                // If we haven't seen the file before
                if (typeof this.startMap[filename] == "undefined") {
                    // read the file for the first time
                    this.readFileWithSkip(filepath, 0, (data: string) => {
                        this.readOnStart && callback(filename, data);
                        this.startMap[filename] = data.length;
                    });
                } else {
                    // debounce the watch function
                    let timeDiff = (Date.now() - this.fileReadTimes[filename]) / 1000;
                    
                    // we wait 100 milliseconds before reading the file,
                    // because of File System delays
                    setTimeout(() => {
                        this.fileReadTimes[filename] = Date.now();
                        if (timeDiff > 0.5) {
                        
                            this.readFileWithSkip(filepath, this.startMap[filename], (data: string) => {
                                callback(filename, data);
                                this.startMap[filename] += data.length;
                            });
                        }
                    }, 100);
                }

                this.fileReadTimes[filename] = Date.now();
            }
        });
    }

    readFileWithSkip (filename: string, skip: number, callback: (data: string) => void): void {
        // Read the file, but skip already read bytes
        let logStream = fs.createReadStream(filename, {
            start: skip 
        });

        logStream.on('data', (data: Buffer) => {
            if (data) {
                callback(data.toString());
            }
        });
    }
}