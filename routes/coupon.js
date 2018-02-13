
'use strict';

const express = require('express');
const router = express.Router();
const Offer = require('../models/offer');
const Coupon = require('../models/coupon');

router.get('/coupons', (req, res, next) => {
  Coupon.find({ user: req.session.currentUser._id })
    .then((coupons) => {
      res.render('coupon', { coupons });
    });
});

router.post('/getcoupon/:id', (req, res, next) => {
  Offer.findById(req.params.id).then((offer) => {
    const newCoupon = new Coupon({
      user: req.session.currentUser._id,
      status: false,
      review: '',
      restaurant: offer.restaurant,
      offerId: offer._id
    });

    newCoupon.save().then((coupon) => {
      res.redirect('/coupons');
    });
  }).catch(next);
});

module.exports = router;
