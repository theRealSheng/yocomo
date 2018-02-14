
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const ReviewSchema = new Schema({
  couponId: {
    type: ObjectId,
    ref: 'Coupon'
  },
  offerId: {
    type: ObjectId,
    ref: 'Coupon'
  },
  restaurantId: {
    type: ObjectId,
    ref: 'Coupon'
  },
  rate: Number,
  comment: String,
  name: String,
  userId: {
    type: ObjectId,
    ref: 'User'
  }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;
