const Poem = require('../models/Poem');
const Author = require('../models/Author');

const store = async (req, res) => {
    let { title, body } = req.body;
    try {
        const poem = await Poem.create({ title, body, author: req.userId });
        if (poem) {
            return res.status(201).json(poem)
        } else {
            return res.status(406).send();
        }
    } catch (err) {
        return res.status(500).send();
    }
}

const update = async (req, res) => {
    let { title, body } = req.body;
    let { pid } = req.params;
    try {
        let updatedPoem = new Object();
        if (title != undefined) {
            updatedPoem.title = title;
        }

        if (body != undefined) {
            updatedPoem.body = body;
        }

        if (title === undefined && body === undefined) {
            return res.status(400).json("New data was not sent.");
        }

        const poem = await Poem.updateOne({ _id: pid, author: req.userId }, updatedPoem);
        if (poem) {
            if (poem.n !== 0) {
                return res.status(201).json(poem)
            }
            return res.status(401).json("User does not own the poem.");
        } else {
            return res.status(500).send();
        }
    } catch (err) {
        return res.status(500).send();
    }
}

const remove = async (req, res) => {
    let { pid } = req.params;
    let author = req.userId;

    try {
        if (author == undefined || author == "") {
            return res.status(401).json("User does not own the poem.");
        }

        const poem = await Poem.deleteOne({ _id: pid, author: author });
        console.log(poem);
        if (poem) {
            if (poem.n !== 0) {
                return res.status(201).json(poem)
            }
            return res.status(401).json("User does not own the poem or it doesn't exists.");
        } else {
            return res.status(500).send();
        }
    } catch (err) {
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
            .skip(page > 0 ? ((page - 1) * items) : 0)
            .limit(items);
        return res.status(200).json({
            poems
        });
    } catch (err) {
        console.log(err)
        return res.status(500).send();
    }
}

const getPoemsByAuthorId = async (req, res) => {
    const authorId = req.params.pid;

    let author;
    try {
        author = await Author.findById(authorId);
    } catch (err) {
        return res.status(500).send({
            message: 'Could not find author!'
        });
    }

    if (!author) {
        return res.status(500).json({
            message: 'Author does not exist!'
        });
    }

    try {
        const poems = await Poem.find({
            author: authorId
        });

        return res.status(200).json(poems);
    } catch (err) {
        console.log(err)
        return res.status(500).send();
    }
}

module.exports = {
    store,
    update,
    remove,
    list,
    getPoemsByAuthorId,
};
