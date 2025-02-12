const connection = require("./db");

const insertUser = `INSERT INTO ducat (name,email) VALUES(?,?)`;
const values = ['anuj', 'anuj2010@gmail.com'];
connection.query(insertUser, values, (error, result) => {
    if (error) throw error;
    console.log('User inserted , ID:', result.insertId);
});