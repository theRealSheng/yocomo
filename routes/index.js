
'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  res.render('index');
});

module.exports = router;
