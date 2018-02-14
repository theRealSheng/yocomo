
'use strict';

const express = require('express');
const router = express.Router();
const coupon = require('../models/coupon');
const User = require('../models/user');

router.get('/review', (req, res, next) => {
  res.render('review');
});

router.post('/buyer-review', (req, res, next) => {
  User.findById(req.session.currentUser._id)
    .then(() => {
      const data = {
        offerId: coupon._id,
        restaurantId: coupon.restaurant,
        name: req.body.rate,
        comment: req.body.comment
      };
    });
});

module.exports = router;
