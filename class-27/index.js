const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});

// config session middleware
app.use(
    session({
        secret: "mysecret",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);

// create a route to set session data
app.get("/login", (req, res) => {
    req.session.name = "Yugal";
    res.send("Session data set");
});

// route to get session data
app.get("/profile", (req, res) => {
    if (req.session.name) {
        res.send(`welcome back , ${req.session.name}`);
    } else {
        res.send("please login first");
    }
});

// route to destroy session
app.get("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.send("Error in destroying session");
        }
        res.send("Session destroyed successfully");
    });
});

app.listen(port, () => {
    console.log(`server running this port ${port}`);
});
