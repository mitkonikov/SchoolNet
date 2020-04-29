class NotificationSystem {
    constructor(node_databases) {
        this.databases = node_databases;
        this.ZNAMDB = node_databases.ZNAM;
    }

    getNotifications = (user, callback, hook) => {
        this.ZNAMDB.query("SELECT * FROM tbl_push WHERE Student_ID = ? AND Seen = ? ORDER BY Notification_ID ASC LIMIT 5", [user, 0], (err, rows) => {
            let IDs = [];
            if (typeof rows !== "undefined" && rows.length > 0) {
                for (let row of rows) {
                    IDs.push(row.Notification_ID);
                }
            }

            this.ZNAMDB.query("SELECT * FROM tbl_notifications WHERE ID IN (" + IDs.join() + ")", (err, notifications) => {
                if (typeof hook === "function") {
                    hook(this);
                }
                
                if (typeof callback === "function") {
                    callback(notifications);
                }
            });
        });
    }
}

module.exports.NotificationSystem = NotificationSystem;