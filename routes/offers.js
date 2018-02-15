
'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');

const User = require('../models/user');
const Offer = require('../models/offer');
const Picture = require('../models/picture');
const upload = multer({ dest: './public/uploads/' });

router.get('/offers', (req, res, next) => {
  Offer.find({}).then((offers) => {
    const data = {
      offers
    };
    res.render('offers', data);
  }).catch(next);
});

router.get('/my-offers', (req, res, next) => {
  Offer.find({ restaurant: req.session.currentUser._id })
    .then((offers) => {
      Picture.find({}).then(response => {
        const data = {
          pictures: response
        };
        res.render('forms/my-offers', { offers, data });
      });
    });
});

router.post('/my-offers', (req, res, next) => {
  const deal = req.body.dealName;
  const price = req.body.price;
  const quantity = req.body.quantity;

  User.findById(req.session.currentUser._id)
    .then((user) => {
      const newOffer = new Offer({
        name: User.name,
        restaurant: user._id,
        dealname: deal,
        price: price,
        quantity: quantity
      });

      newOffer.save().then((offer) => {
        res.redirect('/offers');
      });
    }).catch(next);
});

router.post('/upload', upload.single('photo'), (req, res, next) => {
  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });

  pic.save().then(response => {
    res.redirect('/coupons');
  }).catch(err => {
    return next(err);
  });
});

module.exports = router;
