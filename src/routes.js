const router = require('express').Router();

const Author = require('./controllers/AuthorController');
const Auth = require('./controllers/AuthController');

router.get('/', (req, res) => {
    res.json({test:true});
})

router.get('/authors', Auth.isAuthenticated, (req, res, next) => {
    console.log('x')
    res.status(200).json({message: 'Success!'});
});

router.post('/signup', Author.signup);

router.post('/login', Auth.login);

router.get('/logout', Auth.logout);

module.exports = router;