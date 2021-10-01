// For future update, no feature in frontend yet
const express = require('express');
const User = require('../models/User');
const bcrypt = require("bcrypt");
const {
  createUserToken
} = require('../middleware/auth');

const router = express.Router();

// SIGN UP
router.post('/signup', (req, res, next) => {
  console.log('route hit')
  bcrypt
    .hash(req.body.password, 10)
    .then(hash =>
      ({
        email: req.body.email,
        password: hash
      })
    )
    .then(user => User.create(user))
    .then(user => res.status(201).json(user))
    .catch(next)
});

// SIGN IN
router.post('/signin', (req, res, next) => {
  User.findOne({
      email: req.body.email
    })
    .then((user) => createUserToken(req, user))
    .then((token) => res.json({
      token
    }))
    .catch(next)
});

module.exports = router;
