import socketio from 'socket.io';
import Journal from '../logging/Journal';

export default class PilotSocket {
    private socket: socketio.Namespace;
    private logPath: string;

    /**
     * The main module dealing with the real time connection to the PILOT dashboard
     * @param socket SocketIO socket (constructed `socketio.of('/pilot')`)
     */
    constructor(socket: socketio.Namespace) {
        this.socket = socket;
        this.logPath = process.env.LOG_PATH;

        if (typeof this.logPath == "undefined") {
            console.log("Can't create a Socket Listener at PILOT.")
            console.log("LOG_PATH undefined in the .ENV file.");
            return;
        }

        socket.on('connection', socket => {
            const journal = new Journal();
            journal.startWatch(this.logPath, (filename, data) => {
                let type = "INFO";
                if (filename.includes("err")) type = "ERR";

                socket.emit('log', {
                    type, data
                });
            });
        });
    }
}