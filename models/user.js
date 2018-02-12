
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  role: {
    type: String,
    enum: ['BUYER', 'RESTAURANT']
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
