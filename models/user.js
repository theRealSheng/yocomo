
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: ['BUYER', 'MERCHANT']
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
