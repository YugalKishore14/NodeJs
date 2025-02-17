const connection = require('./db');
const selectUser = `SELECT * FROM ducat`;

connection.query(selectUser, (error, results) => {
    if (error) throw error;
    console.log('ducat:', results);
})
