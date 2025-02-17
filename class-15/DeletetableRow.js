const { query } = require('express');
const connection = require('./db');

const deleteUser = 'DELETE FROM ducat WHERE id = ?';
const values = ['2'];
connection.query(deleteUser, values, (error, result) => {
    if (error) throw error;
    console.log('User deleted:', result);
})