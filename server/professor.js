var app, network, crypto;

var BuildProfessor = function(app_ref, network_ref, crypto_ref) {
    app = app_ref;
    network = network_ref;
    crypto = crypto_ref;
}


var Register = function(req, res) {
    // REGISTER THE TEACHER                
    var valuesINFO = {
        ID : '',
        Display_Name : req.body.firstname + " " + req.body.lastname,
        Birthday : '0000-00-00'
        //Teacher_ID : '-1', 
        // Teacher_Email : '-1'
    };

    var salt = process.env.PASSPORT_SALT;
    salt = salt + '' + req.body.password;
    var encPassword = crypto.createHash('sha256').update(salt).digest('hex');

    var values = {
        ID : '',
        Nickname : req.body.username,
        Password : encPassword,
        Role : 1,
        Firstname : req.body.firstname,
        Lastname : req.body.lastname,
        School_ID : req.body.school,
        Email : req.body.email,
        Gender : req.body.gender,
        Valid : '1'
    };

    // TEACHERS
    network.query("INSERT INTO tbl_students SET ?", values, function(err, rows) {
        // ERROR HANDLING
        // DEV
        console.log(rows);
        
        network.query("SELECT ID FROM tbl_students WHERE Nickname = ? AND Password = ?", [values.Nickname, values.Password], function(err, rows) {
            var ID = rows[0].ID;

            // STUDENTS_INFO
            valuesINFO['ID'] = ID;
            network.query("INSERT INTO tbl_students_info SET ?", valuesINFO, function(err, rows) {
                // STATISTICS
                var valuesStats = {
                    ID : ID,
                    Last_Date_Login : new Date().toISOString().slice(0, 19).replace('T', ' '),
                    Successive_Logins : 1
                }

                network.query("INSERT INTO tbl_stats SET ?", valuesStats);
                res.send("success");
            });
        });
    });
}

module.exports.BuildProfessor = BuildProfessor;
module.exports.Register = Register;