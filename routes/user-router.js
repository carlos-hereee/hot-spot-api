const router = require('express').Router();

const authenticate = require('../auth/authenticate-middleware.js');
const Users = require('./user-model.js');

router.get('/', (req, res) => {
    Users.find()
    .then(users => {
        res.json({ users });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'server error', err: err})
    })
})

module.exports = router;