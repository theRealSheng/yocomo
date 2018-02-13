
'use strict';

const express = require('express');
const router = express.Router();
// const user = require('../models/user');

router.get('/my-offers', (req, res, next) => {
  res.render('forms/my-offers');
});

module.exports = router;
