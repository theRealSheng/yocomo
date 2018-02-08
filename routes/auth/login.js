
'use strict';

const express = require('express');
const auth = express.Router();

auth.get('/', (req, res, next) => {
  res.render('login');
});

module.exports = auth;
