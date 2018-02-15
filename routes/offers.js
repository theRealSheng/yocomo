
'use strict';

const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Offer = require('../models/offer');

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
      res.render('forms/my-offers', { offers });
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

      return newOffer.save();
    })
    .then((offer) => res.redirect('/offers'))
    .catch(next);
});

module.exports = router;
