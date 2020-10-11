const router = require('express').Router();

const Auth = require('./controllers/AuthController');
const Author = require('./controllers/AuthorController');
const Poem = require('./controllers/PoemController');

router.get('/', (req, res) => {
    res.json({ test: true });
})

router.get('/authors', Auth.isAuthenticated, (req, res, next) => {
    console.log('x')
    res.status(200).json({ message: 'Success!' });
});

router.get('/author/:pid', Author.getAuthorById);

router.get('/author/:pid/poems', Poem.getPoemsByAuthorId)

router.get('/poems', Poem.list);

router.post('/poems', Auth.isAuthenticated, Poem.store);

router.post('/poems/:pid', Auth.isAuthenticated, Poem.update);

router.delete('/poems/:pid', Auth.isAuthenticated, Poem.remove);

router.post('/signup', Author.signup);

router.post('/login', Auth.login);

router.get('/logout', Auth.logout);

module.exports = router;