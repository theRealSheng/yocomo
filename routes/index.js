
'use strict';

const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/profile', (req, res, next) => {
  user.findById(user._id).then((user) => {
    res.render('profile');
  }).catch(next);
});

module.exports = router;
