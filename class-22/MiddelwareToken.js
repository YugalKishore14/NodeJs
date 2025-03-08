const express = require('express');
const app = express();
const portNumber = 4000;
const { checkToken } = require('./middelware/Middelware');
const { checkpass } = require('./middelware/Middelware');
app.use(express.json());
app.set("view engine", "pug");
app.set("views", "./views");


app.get("/", (req, res) => {
    res.render("index");
});

app.use(checkToken);
app.get('/Token', checkToken, (req, res) => {
    res.send(
        [
            {
                id: "1",
                name: "yugal",
                email: "yugal@gmail.com",
                contact: "9358489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "2",
                name: "juned",
                email: "juned@gmail.com",
                contact: "9358489349",
                role: "Student",
                course: "MERN",
            },
            {
                id: "3",
                name: "dipanshu",
                email: "dipanshu@gmail.com",
                contact: "4558489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "4",
                name: "rajan",
                email: "rajan@gmail.com",
                contact: "9390489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "5",
                name: "amit",
                email: "amit@gmail.com",
                contact: "9456781234",
                role: "Student",
                course: "MERN",
            },
            {
                id: "6",
                name: "rohit",
                email: "rohit@gmail.com",
                contact: "9856743210",
                role: "Employee",
                company: "TechCorp",
                designation: "Software Engineer",
            },
            {
                id: "7",
                name: "akash",
                email: "akash@gmail.com",
                contact: "9876543201",
                role: "Employee",
                company: "Web Solutions",
                designation: "Frontend Developer",
            },
            {
                id: "8",
                name: "manoj",
                email: "manoj@gmail.com",
                contact: "9543216789",
                role: "Employee",
                company: "DataSys",
                designation: "Backend Developer",
            },
            {
                id: "9",
                name: "sandeep",
                email: "sandeep@gmail.com",
                contact: "9632587410",
                role: "Employee",
                company: "InnovateTech",
                designation: "Full Stack Developer",
            },
            {
                id: "10",
                name: "rahul",
                email: "rahul@gmail.com",
                contact: "9874123650",
                role: "Employee",
                company: "NextGen IT",
                designation: "Software Tester",
            },
            {
                id: "11",
                name: "naveen",
                email: "naveen@gmail.com",
                contact: "9456321789",
                role: "Student",
                course: "MERN",
            },
            {
                id: "12",
                name: "sumit",
                email: "sumit@gmail.com",
                contact: "9785412365",
                role: "Student",
                course: "MERN",
            },
            {
                id: "13",
                name: "vikas",
                email: "vikas@gmail.com",
                contact: "9856123478",
                role: "Student",
                course: "MERN",
            },
            {
                id: "14",
                name: "sachin",
                email: "sachin@gmail.com",
                contact: "9564781230",
                role: "Student",
                course: "MERN",
            },
            {
                id: "15",
                name: "karan",
                email: "karan@gmail.com",
                contact: "9871236540",
                role: "Student",
                course: "MERN",
            },
            {
                id: "16",
                name: "random_user_1",
                email: "random1@gmail.com",
                contact: "9876541231",
                role: "Employee",
                company: "CodeWave",
                designation: "DevOps Engineer",
            },
            {
                id: "17",
                name: "random_user_2",
                email: "random2@gmail.com",
                contact: "9876541232",
                role: "Employee",
                company: "CloudNet",
                designation: "Cloud Architect",
            },
            {
                id: "18",
                name: "random_user_3",
                email: "random3@gmail.com",
                contact: "9876541233",
                role: "Employee",
                company: "AI Innovations",
                designation: "Machine Learning Engineer",
            },
            {
                id: "19",
                name: "random_user_4",
                email: "random4@gmail.com",
                contact: "9876541234",
                role: "Employee",
                company: "CyberSecure",
                designation: "Cybersecurity Analyst",
            },
            {
                id: "20",
                name: "random_user_5",
                email: "random5@gmail.com",
                contact: "9876541235",
                role: "Employee",
                company: "QuantumTech",
                designation: "Blockchain Developer",
            },
        ]
    )
})

app.use(checkpass);
app.get('/Password', checkpass, (req, res) => {
    res.send(
        [
            {
                id: 'lll'
            },
            {
                id: "1",
                name: "yugal",
                email: "yugal@gmail.com",
                contact: "9358489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "2",
                name: "juned",
                email: "juned@gmail.com",
                contact: "9358489349",
                role: "Student",
                course: "MERN",
            },
            {
                id: "3",
                name: "dipanshu",
                email: "dipanshu@gmail.com",
                contact: "4558489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "4",
                name: "rajan",
                email: "rajan@gmail.com",
                contact: "9390489809",
                role: "Student",
                course: "MERN",
            },
            {
                id: "5",
                name: "amit",
                email: "amit@gmail.com",
                contact: "9456781234",
                role: "Student",
                course: "MERN",
            },
            {
                id: "6",
                name: "rohit",
                email: "rohit@gmail.com",
                contact: "9856743210",
                role: "Employee",
                company: "TechCorp",
                designation: "Software Engineer",
            },
            {
                id: "7",
                name: "akash",
                email: "akash@gmail.com",
                contact: "9876543201",
                role: "Employee",
                company: "Web Solutions",
                designation: "Frontend Developer",
            },
            {
                id: "8",
                name: "manoj",
                email: "manoj@gmail.com",
                contact: "9543216789",
                role: "Employee",
                company: "DataSys",
                designation: "Backend Developer",
            },
            {
                id: "9",
                name: "sandeep",
                email: "sandeep@gmail.com",
                contact: "9632587410",
                role: "Employee",
                company: "InnovateTech",
                designation: "Full Stack Developer",
            },
            {
                id: "10",
                name: "rahul",
                email: "rahul@gmail.com",
                contact: "9874123650",
                role: "Employee",
                company: "NextGen IT",
                designation: "Software Tester",
            },
            {
                id: "11",
                name: "naveen",
                email: "naveen@gmail.com",
                contact: "9456321789",
                role: "Student",
                course: "MERN",
            },
            {
                id: "12",
                name: "sumit",
                email: "sumit@gmail.com",
                contact: "9785412365",
                role: "Student",
                course: "MERN",
            },
            {
                id: "13",
                name: "vikas",
                email: "vikas@gmail.com",
                contact: "9856123478",
                role: "Student",
                course: "MERN",
            },
            {
                id: "14",
                name: "sachin",
                email: "sachin@gmail.com",
                contact: "9564781230",
                role: "Student",
                course: "MERN",
            },
            {
                id: "15",
                name: "karan",
                email: "karan@gmail.com",
                contact: "9871236540",
                role: "Student",
                course: "MERN",
            },
            {
                id: "16",
                name: "random_user_1",
                email: "random1@gmail.com",
                contact: "9876541231",
                role: "Employee",
                company: "CodeWave",
                designation: "DevOps Engineer",
            },
            {
                id: "17",
                name: "random_user_2",
                email: "random2@gmail.com",
                contact: "9876541232",
                role: "Employee",
                company: "CloudNet",
                designation: "Cloud Architect",
            },
            {
                id: "18",
                name: "random_user_3",
                email: "random3@gmail.com",
                contact: "9876541233",
                role: "Employee",
                company: "AI Innovations",
                designation: "Machine Learning Engineer",
            },
            {
                id: "19",
                name: "random_user_4",
                email: "random4@gmail.com",
                contact: "9876541234",
                role: "Employee",
                company: "CyberSecure",
                designation: "Cybersecurity Analyst",
            },
            {
                id: "20",
                name: "random_user_5",
                email: "random5@gmail.com",
                contact: "9876541235",
                role: "Employee",
                company: "QuantumTech",
                designation: "Blockchain Developer",
            },
        ]
    )
})

app.listen(portNumber, () => {
    console.log('server is runing');
})