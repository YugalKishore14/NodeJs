const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();



const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST_NAME,
    user: process.env.DATABASE_USER_NAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

connection.connect((error) => {
    if (error) {
        console.log('database not connect = ', error);
        return;
    }
    console.log('database is connect');
})

module.exports = connection;