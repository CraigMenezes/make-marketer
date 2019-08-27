// RECQUIRING NPM MODULES
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

 // USER SCHEMA
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    token: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User;