
'use strict';

const express = require('express');
const router = express.Router();
const coupon = require('../models/coupon');
const offer = require('../models/offer');
const Review = require('../models/review');

router.get('/review', (req, res, next) => {
  Review.find({ userID: req.session.currentUser._id })
    .then(reviews => {
      console.log(reviews);
      res.render('review', { reviews });
    });
});

router.post('/review', (req, res, next) => {
  const rate = req.body.rate;
  const comment = req.body.comment;

  coupon.find({ userId: req.session.currentUser._id })
    .then((user) => {
      const newReview = new Review({
        offerId: coupon.offerId,
        restaurantId: coupon.restaurantId,
        rate: rate,
        comment: comment,
        name: offer.name,
        userId: user._id
      });

      newReview.save().then((review) => {
        res.redirect('/review');
      });
    }).catch(next);
});

module.exports = router;
