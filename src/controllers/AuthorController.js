const Author = require('../models/Author');

const crypto = require('crypto');

const signup = async (req, res) => {
    let { username, password, email } = req.body;
    try {

        const authorExists = await Author.exists({email});

        if (authorExists) {
            return res.status(409).json({message:"email already in use."});
        } else {
            password = crypto.createHash('sha256').update(password).digest('base64');
            const author = await Author.create({
                username, password, email
            })
            if (author) {
                return res.status(201).json({id:author._id});
            } else {
                return res.status(406).send();
            }
        }
    } catch(error) {
        return res.status(500).send();
    }
}

module.exports = { signup }