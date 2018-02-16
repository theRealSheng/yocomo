
'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');

const Offer = require('../models/offer');
const Coupon = require('../models/coupon');
const Picture = require('../models/picture');
const upload = multer({ dest: './public/uploads/' });

router.get('/coupons', (req, res, next) => {
  if (req.session.currentUser.role === 'RESTAURANT') {
    return res.redirect('/my-offers');
  }

  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  Coupon.find({ user: req.session.currentUser._id })
    .then((coupons) => {
      Picture.find({ userId: req.session.currentUser._id }).then(response => {
        const data = {
          pictures: response
        };
        res.render('coupon', { coupons, data });
      });
    }).catch(next);
});

router.post('/getcoupon/:id', (req, res, next) => {
  if (req.session.currentUser.role === 'RESTAURANT') {
    return res.redirect('/my-offers');
  }

  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  Offer.findById(req.params.id)
    .then((offer) => {
      const newCoupon = new Coupon({
        user: req.session.currentUser._id,
        status: false,
        review: '',
        restaurantId: offer.restaurant,
        name: offer.name,
        offerId: offer._id,
        price: offer.price,
        dealname: offer.dealname,
        quantity: 1,
        couponId: Coupon._id
      });

      return newCoupon.save();
    })
    .then(() => Offer.update({ _id: req.params.id }, { $inc: { quantity: -1 } }))
    .then(() => res.redirect('/coupons'))
    .catch(next);
});

router.post('/upload', upload.single('photo'), (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  }

  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname,
    userId: req.session.currentUser._id
  });

  pic.save().then(response => {
    res.redirect('/coupons');
  }).catch(err => {
    return next(err);
  });
});

router.post('/useCoupon/:id', (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect('/auth/login');
  };

  Coupon.findByIdAndUpdate(req.params.id, { status: true }, {new: true})
    .then((coupon) => {
      res.redirect('/coupons');
    })
    .catch(next);
});

module.exports = router;
