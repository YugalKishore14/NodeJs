const express = require('express');
const app = express();
const port = 3000;

let token = "12345";

const cheakToken = (req, res, next) => {
    if (req.query.token == "" | req.query.token == undefined) {
        return res.send({
            status: 0,
            message: "Token is required"
        })
    }
    if (req.query.token != token) {
        return res.send({
            status: 0,
            message: "Invalid token"
        })
    }
    next();
}
app.use(cheakToken);

app.get('/', (req, res) => {
    res.send({
        status: 1,
        message: "Welcome to the protected route"
    });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})