
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const CouponSchema = new Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  status: Boolean,
  review: String,
  restaurantId: {
    type: ObjectId,
    ref: 'Restaurant'
  },
  name: String,
  offerId: {
    type: ObjectId,
    ref: 'Offer'
  },
  price: Number,
  dealname: String,
  quantity: Number
});

const Coupon = mongoose.model('Coupon', CouponSchema);
module.exports = Coupon;
