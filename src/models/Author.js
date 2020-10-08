const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        dropDups: true
    },
    password: String,
    email: {
        type: String,
        unique: true,
        dropDups: true
    },
    showEmail: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Author', AuthorSchema);