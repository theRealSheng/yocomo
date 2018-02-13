
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OfferSchema = new Schema({
  restaurant: {
    type: ObjectId,
    ref: 'User'
  },
  name: String,
  price: Number,
  quantity: Number
});

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;
