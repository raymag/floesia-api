const router = require('express').Router();

const Auth = require('./controllers/AuthController');
const Author = require('./controllers/AuthorController');
const Poem = require('./controllers/PoemController');
const Heart = require('./controllers/HeartController');

router.get('/', (req, res) => {
    res.json("FLOESIA API v1 2020");
})

router.get('/author/:pid', Author.getAuthorById);

router.get('/author/:pid/poems', Poem.getPoemsByAuthorId)

router.get('/poems/:pid', Poem.getOne);

router.get('/poems', Poem.list);

router.post('/poems', Auth.isAuthenticated, Poem.store);

router.put('/poems/:pid', Auth.isAuthenticated, Poem.update);

router.delete('/poems/:pid', Auth.isAuthenticated, Poem.remove);

router.post('/hearts/:pid', Auth.isAuthenticated, Heart.store);

router.get('/author/:pid/hearts', Heart.listByAuthorId);

router.delete('/hearts/:pid', Auth.isAuthenticated, Heart.remove);

router.post('/signup', Author.signup);

router.post('/login', Auth.login);

router.get('/logout', Auth.logout);

module.exports = router;