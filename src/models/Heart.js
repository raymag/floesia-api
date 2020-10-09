const mongoose = require('mongoose');

const HeartSchema = new mongoose.Schema({
    poem: {
        type: mongoose.ObjectId,
        ref: 'Poem',
        required: true
    },
    author: {
        type: mongoose.ObjectId,
        ref: 'Author',
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model('Heart', HeartSchema);