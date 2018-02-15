
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

router.post('/review/:id', (req, res, next) => {
  const rate = req.body.rate;
  const comment = req.body.comment;

  Coupon.findById(req.params.id)
    .then((coupon) => {
      const newReview = new Review({
        couponId: req.params.id,
        offerId: coupon.offerId,
        restaurantId: coupon.restaurantId,
        rate: rate,
        comment: comment,
        name: coupon.name,
        userId: req.session.currentUser._id
      });

      return newReview.save();
    })
    .then(() => res.redirect('/review'))
    .catch(next);
});

router.get('/review-restaurant', (req, res, next) => {
  Review.find({ restaurantId: req.session.currentUser._id })
    .then(reviews => {
      console.log(reviews);
      res.render('review-restaurant', { reviews });
    });
});

module.exports = router;
