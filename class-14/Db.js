const mysql = require('mysql2');
const dotEnv = require('dotenv');
dotEnv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((error) => {
    if (error) {
        console.log('Database not connect', error);
        return;
    }
    console.log('database connected');
})
module.exports = connection;