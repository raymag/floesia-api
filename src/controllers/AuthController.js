const Author = require('../models/Author');

const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const login = async (req, res, next) => {
    let { email, password } = req.body;
    password = crypto.createHash('sha256').update(password).digest('base64');
    try {
        const author = await Author.findOne({email, password});
        if (!author) {
            return res.status(404).json({auth:false})
        } else {
            const token = jwt.sign({id: author._id}, process.env.SECRET, {expiresIn:259200});
            return res.status(200).json({auth:true, token:token});
        }
    } catch (error) {
        next(error);
    }
}

const logout = async (req, res, next) => {
    res.json({ auth: false, token: null });
}

const isAuthenticated = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        req.userId = decoded.id;
        next();
    });
}

module.exports = { login, logout, isAuthenticated };