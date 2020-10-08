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

const list = async (req, res) => {
    let { page, itemsPerPage } = req.query;
    try {
        if (!page) {
            page = 1;
        }
        if (!itemsPerPage) {
            itemsPerPage = 5;
        }
        const poems = await Poem.find()
                                .skip( page > 0 ? ( (page-1) * itemsPerPage ) : 0 )
                                .limit(itemsPerPage);
        return res.status(200).json(poems);
    } catch(err) {
        return res.status(500).send();
    }
}

module.exports = { store, list };