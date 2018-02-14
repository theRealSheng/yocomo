
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ReviewSchema = new Schema({
  offerId: {
    type: ObjectId,
    ref: 'Offer'
  },
  restaurantId: {
    type: ObjectId,
    ref: 'Offer'
  },
  comment: String,
  rate: Number
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
