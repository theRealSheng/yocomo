
'use strict';

const express = require('express');
const router = express.Router();
const user = require('../models/user');
const Offer = require('../models/offer');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/offers', (req, res, next) => {
  user.findById(user._id).then((user) => {
    res.render('offers');
  }).catch(next);
});

router.post('/my-offers', (req, res, next) => {
  const deal = req.body.dealName;
  const price = req.body.price;
  const quantity = req.body.quantity;

  const newOffer = new Offer({
    user: user._id,
    name: deal,
    price: price,
    quantity: quantity
  });

  newOffer.create().then(() => {
    res.redirect('/offers');
  }).catch(next);
});

module.exports = router;
