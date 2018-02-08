
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OfferSchema = new Schema({
  name: String,
  password: String,
  price: Number,
  quantity: Number
});

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;
