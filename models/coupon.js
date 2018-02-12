
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
  restaurant: {
    type: ObjectId,
    ref: 'Restaurant'
  }
});

const Coupon = mongoose.model('Coupon', CouponSchema);
module.exports = Coupon;
