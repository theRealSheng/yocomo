
'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Offer = require('../models/offer');

router.get('/my-offers', (req, res, next) => {
  res.render('forms/my-offers');
});

router.get('/offers', (req, res, next) => {
  Offer.find({}).then((offers) => {
    const data = {
      offers
    };
    res.render('offers', data);
  }).catch(next);
});

router.post('/my-offers', (req, res, next) => {
  const deal = req.body.dealName;
  const price = req.body.price;
  const quantity = req.body.quantity;

  User.findById(req.session.currentUser._id)
    .then((user) => {
      const newOffer = new Offer({
        name: user.name,
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

router.get('/offers', (rreq, res, next) => {
  res.send('offers');
});

module.exports = router;
