
'use strict';

const express = require('express');
const router = express.Router();
const user = require('../models/user');
const Offer = require('../models/offer');

router.get('/', (req, res, next) => {
  res.render('index');
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

  const newOffer = new Offer({
    restaurant: user._id,
    name: deal,
    price: price,
    quantity: quantity
  });

  newOffer.save().then((offer) => {
    console.log(offer);
    res.redirect('/offers');
  }).catch(next);
});

module.exports = router;
