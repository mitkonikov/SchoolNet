const pm2 = require('pm2');

pm2.connect((err) => {
    if (err) {
        console.log("Error connecting to pm2");
        return;
    }
    
    pm2.list((err, list) => {
        if (err) {
            console.log("Internal PM2 Error: ", err);
            return;
        }

        let pid = parseInt(process.pid);

        for (let p of list) {
            if (p.pid == pid) {
                process.env.PM2_ID = p.pm_id;
                console.log(`Process [${p.name}] with ${process.pid} PID has PM2 ID of ${p.pm_id}`);
                break;
            }
        }
    });
});