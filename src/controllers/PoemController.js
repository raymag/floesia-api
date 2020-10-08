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
    let page = parseInt(req.query.page);
    let items = parseInt(req.query.items);
    try {
        if (!page) {
            page = 1;
        }
        if (!items) {
            items = 5;
        }
        const poems = await Poem.find()
                                .skip( page > 0 ? ( (page-1) * items ) : 0 )
                                .limit(items);
        return res.status(200).json({poems});
    } catch(err) {
        console.log(err)
        return res.status(500).send();
    }
}

module.exports = { store, list };