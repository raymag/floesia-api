const Heart = require("../models/Heart");
const Poem = require("../models/Poem");

const store = async (req, res) => {
    let { pid } = req.params;
    try {
        const heartExists = await Heart.findOne({
            poem: pid,
            author: req.userId
        });

        if (heartExists) {
            return res.status(200).json("Heart already exists.");
        }

        const heart = await Heart.create({
            poem: pid,
            author: req.userId
        });

        if (heart) {
            await Poem.updateOne({_id:pid}, {$inc:{
                hearts: 1
            }})
            return res.status(201).json(heart);
        } else {
            return res.status(406).send();
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

const listByAuthorId = async (req, res) => {
    let { pid } = req.params;
    try {
        const hearts = await Heart
            .find({author:pid})
            .sort({createdAt:-1});
        if (hearts) {
            return res.status(200).json(hearts);
        }
        return res.status(200).json([]);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

const remove = async (req, res) => {
    let {pid} = req.params;
    try {
        const removedHeart = await Heart.deleteOne({_id: pid, author: req.userId});
        return res.status(200).json(removedHeart);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

const removeWithPoemId = async (req, res) => {
    let {pid} = req.params;
    try {
        const removedHeart = await Heart.deleteOne({poem: pid, author: req.userId});
        return res.status(200).json(removedHeart);
    } catch (err) {
        console.log(err);
        return res.status(500).send();
    }
}

module.exports = {
    store,
    listByAuthorId,
    remove,
    removeWithPoemId
}