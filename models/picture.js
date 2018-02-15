
'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const pictureSchema = new Schema({
  name: String,
  path: String,
  originalName: String,
  userId: {
    type: ObjectId,
    ref: 'User'
  }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Picture = mongoose.model('Picture', pictureSchema);
module.exports = Picture;
