
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CouponSchema = new Schema({
  userId: String, // Check how to link to User ID
  restaurantId: String, // Check how to link to Merchant ID
  status: Boolean,
  review: String
});

const Coupon = mongoose.model('Coupon', CouponSchema);

module.exports = Coupon;
