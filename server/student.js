var app, network, crypto;

var BuildStudent = function(app_ref, network_ref, crypto_ref) {
    app = app_ref;
    network = network_ref;
    crypto = crypto_ref;
}

var Register = function(req, res) {
    // REGISTER THE STUDENT
    // GET TEACHERS 
    network.query("SELECT * FROM tbl_students WHERE Email = ? AND School_ID = ?", [req.body.teacheremail, req.body.school], function(err, rows) {
        // if (err != null) console.log(err);
        if (rows.length == 0) {
            res.send("teacher email problem");
            return;
        }

        teacherID = rows[0].ID;
        
        // var valuesINFO = ['', req.body.firstname + " " + req.body.lastname, '0000-00-00', teacherID, req.body.teacheremail
        var valuesINFO = {
            ID : '',
            Display_Name : req.body.firstname + " " + req.body.lastname,
            Birthday : '0000-00-00'
            //Teacher_ID : teacherID, 
            // Teacher_Email : req.body.teacheremail
        }
        
        var salt = process.env.PASSPORT_SALT;
        salt = salt + '' + req.body.password;
        var encPassword = crypto.createHash('sha256').update(salt).digest('hex');

        // var values = ['', req.body.username, encPassword, 0, req.body.firstname, req.body.lastname, req.body.school, req.body.email, req.body.gender, '0'
        
        var values = {
            ID : '',
            Nickname : req.body.username,
            Password : encPassword,
            Role : 0,
            Firstname : req.body.firstname,
            Lastname : req.body.lastname,
            School_ID : req.body.school,
            Email : req.body.email,
            Gender : req.body.gender,
            Valid : '1'
        }

        console.log('\x1b[32m%s\x1b[0m', "Registering a new student: " + req.body.username + " in school: " + req.body.school);
        
        console.log("DEV:");
        console.log(values);
        console.log(valuesINFO);
        
        // STUDENTS
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
                
                    var s_req = {
                        ID : '',
                        Student_ID : ID,
                        Teacher_Email : req.body.teacheremail
                    }
                
                    network.query("INSERT INTO tbl_stats SET ?", valuesStats);
                    network.query("INSERT INTO tbl_student_request SET ?", s_req);
                    res.send("success");
                });
            });
        });
    });
}

module.exports.BuildStudent = BuildStudent;
module.exports.Register = Register;