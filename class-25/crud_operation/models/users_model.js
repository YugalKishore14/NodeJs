const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String
    },
    userEmail: {
        type: String
    },
    userMobile: {
        type: String
    }
})

const user = mongoose.model('user', userSchema);
module.exports = user;