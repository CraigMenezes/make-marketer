const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const db = require('../models')

router.get('/', (req, res) => {
    res.render('./signin')
})

router.post('/', (req, res) => {
    let email = req.body.your_email;
    let password = req.body.your_pass;
    console.log(password)

    db.User.findOne({email: email})
    .then((data) => {
        if (password == data.password) {
            res.render('./dashboard')
        } else {
            res.redirect('/signin')
        }
    }).catch((err) => res.send(err))
})

module.exports = router;