
'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('signup-user');
});

// router.post('/signup-user', (req, res, next) => {
//   const data = {
//     username: req.body.username,
//     password: req.body.password
//   };

// });

module.exports = router;
