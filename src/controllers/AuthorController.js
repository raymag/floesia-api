const Author = require('../models/Author');

const crypto = require('crypto');

const getAuthorById = async (req, res, next) => {
    console.log('GET Request in Author Controller');
    const authorId = req.params.pid;
    let author;
    try{
        author = await Author.findById(authorId);
    } catch(err){
        return res.status(500).send({ message: 'Could not find author!' });
    }

    if(!author) {
        return res.status(500).json({ message: 'Author does not exist!' });
    }

    res.json(
        {
            id: author._id, 
            showEmail: author.showEmail, 
            username: author.username, 
            email: author.email, 
            createdAt: author.createdAt, 
            updatedAt: author.updatedAt,
            __v: author.__v
        });
}

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

module.exports = { signup, getAuthorById };