const dotEnv = require('dotenv');
dotEnv.config();

// Token Middelware
let mytoken = process.env.MYTOKEN;
let checkToken = (req, res, next) => {
    if (req.query.adminName == ' ' || req.query.adminName == undefined) {
        return res.send({
            status: 0,
            msg: "please fill the Name"
        })
    }
    if (req.query.adminName != mytoken) {
        return res.send({
            status: 0,
            msg: "Name not match"
        })
    }
    next();
}

// Password Middelware
let mypassword = process.env.MYPASSWORD;
let checkpass = (req, res, next) => {
    if (req.query.password == ' ' || req.query.password == undefined) {
        return res.send({
            status: 0,
            msg: "please fill the password"
        })
    }
    if (req.query.password != mypassword) {
        return res.send({
            status: 0,
            msg: "password not match"
        })
    }
    next();
}
module.exports = { checkToken, checkpass };