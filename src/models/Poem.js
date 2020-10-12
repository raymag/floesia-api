const mongoose = require('mongoose');

const PoemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    author: {
        type:  mongoose.ObjectId,
        required: true,
        ref: 'Author'
    },
    hearts: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Poem', PoemSchema);