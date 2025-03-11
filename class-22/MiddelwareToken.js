const express = require('express');
const app = express();
const portNumber = 4000;
const { checkToken, checkpass } = require('./middelware/Middelware');
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
    res.render("index");
});

// app.use(checkToken);
app.get('/token', checkToken, checkpass, (req, res) => {
    res.send(
        [
            {
                id: "01",
                name: "yugal",
                email: "yugal@gmail.com",
                contact: "9358489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "02",
                name: "juned",
                email: "juned@gmail.com",
                contact: "9358489349",
                role: "Student",
                course: "MERN",
            },
            {
                id: "03",
                name: "dipanshu",
                email: "dipanshu@gmail.com",
                contact: "4558489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "04",
                name: "rajan",
                email: "rajan@gmail.com",
                contact: "9390489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "05",
                name: "amit",
                email: "amit@gmail.com",
                contact: "9456781234",
                role: "Student",
                course: "MERN",
            }
        ]
    )
})

// app.use(checkpass);
// app.get('/password', checkpass, (req, res) => {
//     res.send(
//         [
//             {
//                 id: '111',
//                 name: "kajal"
//             },
//             {
//                 id: "1",
//                 name: "yugal",
//                 email: "yugal@gmail.com",
//                 contact: "9358489809",
//                 role: "Student",
//                 course: "MERN",
//             },
//             {
//                 id: "2",
//                 name: "juned",
//                 email: "juned@gmail.com",
//                 contact: "9358489349",
//                 role: "Student",
//                 course: "MERN",
//             },
//             {
//                 id: "3",
//                 name: "dipanshu",
//                 email: "dipanshu@gmail.com",
//                 contact: "4558489809",
//                 role: "Student",
//                 course: "MERN",
//             },
//             {
//                 id: "4",
//                 name: "rajan",
//                 email: "rajan@gmail.com",
//                 contact: "9390489809",
//                 role: "Student",
//                 course: "MERN",
//             },
//             {
//                 id: "5",
//                 name: "amit",
//                 email: "amit@gmail.com",
//                 contact: "9456781234",
//                 role: "Student",
//                 course: "MERN",
//             }
//         ]
//     )
// })

app.listen(portNumber, () => {
    console.log('server is runing');
})