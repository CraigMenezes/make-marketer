const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const db = require('../models')

router.get('/dashboard', (req, res) => {
    res.render('/dashboard')
})

module.exports = router;