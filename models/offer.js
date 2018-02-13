
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const OfferSchema = new Schema({
  name: String,
  restaurant: {
    type: ObjectId,
    ref: 'User'
  },
  dealname: String,
  price: Number,
  quantity: Number
});

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;
