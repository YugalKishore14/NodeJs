const connection = require("./db");

const createTable = `
    CREATE TABLE IF NOT EXISTS ducat(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
    );
    `;

connection.query(createTable, (error, results) => {
    if (error) throw error;
    console.log("User table created");
});
