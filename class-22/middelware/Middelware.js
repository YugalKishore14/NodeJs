const dotEnv = require('dotenv');
dotEnv.config();

// Token Middelware
let mytoken = process.env.MYTOKEN;
let checkToken = (req, res, next) => {
    if (req.query.token == ' ' || req.query.token == undefined) {
        return res.send({
            status: 0,
            msg: "please fill the token"
        })
    }
    if (req.query.token != mytoken) {
        return res.send({
            status: 0,
            msg: "token not match"
        })
    }
    next();
}

// Password Middelware
let mypassword = process.env.MYPASSWORD;
let checkpass = (req, res, next) => {
    if (req.query.pass == ' ' || req.query.pass == undefined) {
        return res.send({
            status: 0,
            msg: "please fill the password"
        })
    }
    if (req.query.pass != mypassword) {
        return res.send({
            status: 0,
            msg: "password not match"
        })
    }
    next();
}
module.exports = { checkToken, checkpass };