const express = require('express');
const connection = require('./db')
const updateUser = `UPDATE ducat SET name = ? WHERE id = ?`;
const value = ['yugal', '4'];
connection.query(updateUser, value, (error, resulte) => {
    if (error) throw error;
    console.log('User update:', resulte.affectedRows);
})
