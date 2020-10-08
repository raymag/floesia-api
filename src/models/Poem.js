const mongoose = require('mongoose');

const PoemSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        type:  mongoose.ObjectId,
        required: true
    },
    hearts: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Poem', PoemSchema);