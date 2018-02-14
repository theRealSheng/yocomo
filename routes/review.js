
'use strict';

const express = require('express');
const router = express.Router();
const Coupon = require('../models/coupon');
const Review = require('../models/review');

router.get('/review', (req, res, next) => {
  Review.find({ userId: req.session.currentUser._id })
    .then(reviews => {
      res.render('review', { reviews });
    });
});

router.post('/review', (req, res, next) => {
  const rate = req.body.rate;
  const comment = req.body.comment;

  Coupon.find({ user: req.session.currentUser._id })
    .then((coupon) => {
      // Coupon only gets the first coupon?

      const newReview = new Review({
        couponId: coupon[0]._id,
        offerId: coupon[0].offerId,
        restaurantId: coupon[0].restaurantId,
        rate: rate,
        comment: comment,
        name: coupon[0].name,
        userId: req.session.currentUser._id
      });

      newReview.save().then((review) => {
        res.redirect('/review');
      });
    }).catch(next);
});

router.get('/review-restaurant', (req, res, next) => {
  Review.find({ restaurantId: req.session.currentUser._id })
    .then(reviews => {
      console.log(reviews);
      res.render('review-restaurant', { reviews });
    });
});

module.exports = router;
