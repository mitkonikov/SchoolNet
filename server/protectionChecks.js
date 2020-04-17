let logErrorHandler;

module.exports.Error = function(ErrorHandler_ref) {
    logErrorHandler = ErrorHandler_ref.log;
}

/**
 * Checks if the data in a field validates a regexCheck of main characters
 * @param {*} field         String of the name of the field 
 * @param {*} data          Data inside the field
 * @param {*} userinfo      Information about the user that submits the data
 */
let regexCheck = function(field, data, userinfo) {
    let regexCheckExp = new RegExp(/^[абвгдѓежзѕијклљмнњопрстќуфхцчџшАБВГДЃЕЖЗЅИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ\w]*$/);
    if (!regexCheckExp.test(data)) {
        let errorDesc = "Tried to create SQL injection bypassing the client-side Javascript! \n " + field + " doesn't pass the regexCheck!";
        logErrorHandler("POST", userinfo.ip, null, errorDesc, userinfo);
        return false;
    }

    return true;
}

/**
 * Checks if the data in a field is empty
 * @param {*} field         String of the name of the field 
 * @param {*} data          Data inside the field
 * @param {*} userinfo      Information about the user that submits the data
 */
let emptyCheck = function(field, data, userinfo) {
    if (!(typeof data !== "undefined")) {
        let errorDesc = "Tried to send an empty POST request bypassing the client-side Javascript! \n " + field + " is not defined!";
        logErrorHandler("POST", userinfo.ip, null, errorDesc, userinfo);
        return false;
    }

    return true;
}

/**
 * Checks if the data in a field is in length-bounds
 * @param {*} field         String of the name of the field 
 * @param {*} data          Data inside the field
 * @param {*} min           The minimum length of the data
 * @param {*} max           The maximum length of the data
 * @param {*} userinfo      Information about the user that submits the data
 */
let lengthCheck = function(field, data, min, max, userinfo) {
    if (data.length < min) {
        let errorDesc = "Tried to create SQL injection bypassing the client-side Javascript! \n " + field + " is shorter than " + min + " characters.";
        logErrorHandler("POST", userinfo.ip, null, errorDesc, userinfo);
        return false;
    }

    if (data.length > max) {
        let errorDesc = "Tried to create SQL injection bypassing the client-side Javascript! \n " + field + " is longer than " + max + " characters.";
        logErrorHandler("POST", userinfo.ip, null, errorDesc, userinfo);
        return false;
    }

    return true;
}

/**
 * Main signin-check function
 */
let signinCheck = function(req) {
    let username = req.sanitize(req.body.username);
    let password = req.sanitize(req.body.password);
    let school = req.sanitize(req.body.school);
    let ip = req.clientIp;

    userinfo = {
        username: username,
        school: school,
        ip: ip
    };

    if(!emptyCheck('Username', username, userinfo) || !emptyCheck('Password', password, userinfo)) {
        return false;
    }

    if (!regexCheck('Username', username, userinfo)) {
        return false;
    }

    if (!lengthCheck('Username', username, 5, 32, userinfo)) {
        return false;
    }

    if (!lengthCheck('Password', password, 8, 35, userinfo)) {
        return false;
    }

    let regexCheckSchool = new RegExp(/^[\d]*$/);
    if (!regexCheckSchool.test(school)) {
        let errorDesc = "Tried to create SQL injection bypassing the client-side Javascript! \n School doesn't pass the regexCheck";
        logErrorHandler("POST", ip, null, errorDesc, userinfo);
        return false;
    }

    return true;
}

/**
 * Email check function
 * (There are standards that don't pass the function, but are very rare)
 */
let emailCheck = function(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * Main register check function
 * @param {*} body Body of the req
 * @param {*} ip   IP of the user
 */
let registerCheck = function(req) {
    let body = req.body;
    let ip = req.clientIp;

    let data = {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email.trim(),
        gender: body.gender
    }

    if (body.student == 'true') {
        data['teacheremail'] = body.teacheremail;
    }

    let userinfo = {
        username: body.username,
        ip: ip
    }

    if (!signinCheck(req)) {
        return false;
    }

    for (let key in data) {
        if (!emptyCheck(key, data[key], userinfo)) {
            return false;
        }
    }

    // firstname

    // lastname

    // email
    if (!emailCheck(data.email)) {
        let errorDesc = "Bypassed the client-side Javascript! \n Email doesn't pass the emailCheck";
        logErrorHandler("POST", ip, null, errorDesc, data);
        return false;
    }

    // teacheremail
    if (body.student == 'true') {
        if (!emailCheck(data.teacheremail)) {
            let errorDesc = "Bypassed the client-side Javascript! \n Teacher email doesn't pass the emailCheck";
            logErrorHandler("POST", ip, null, errorDesc, data);
            return false;
        }
    }

    // gender
    if (body.gender != "Male" && body.gender != "Female") {
        let errorDesc = "Bypassed the client-side Javascript! \n Gender isn't Male or Female";
        logErrorHandler("POST", ip, null, errorDesc, data);
        return false;
    }

    return true;
}

module.exports.signinCheck = signinCheck;
module.exports.registerCheck = registerCheck;