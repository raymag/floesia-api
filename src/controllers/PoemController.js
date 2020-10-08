const Poem = require('../models/Poem');

const store = async (req, res) => {
    let { title, body } = req.body;
    try {
        const poem = await Poem.create({title, body, author:req.userId});
        if (poem) {
            return res.status(201).json(poem)
        } else {
            return res.status(406).send();
        }
    } catch(err) {
        return res.status(500).send();
    }
}

module.exports = { store };