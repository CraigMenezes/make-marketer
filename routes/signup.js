const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const db = require('../models')

router.get('/', (req, res) => {
    res.render('./signup')
})

router.post('/', (req, res) => {
    let User = new db.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })

    db.User.create(User)
        .then(() => res.redirect('/signin'))
        .catch(() => res.send(err))

})

module.exports = router;