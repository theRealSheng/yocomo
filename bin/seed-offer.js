
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yocomo');

const Offer = require('../models/offer');
const User = require('../models/user');

const offer = [
  {
    name: 'Restaurant 88',
    restaurant: User._id,
    dealname: '20 Euro Meal',
    price: 20,
    quantity: 40
  },
  {
    name: 'Restaurant 2',
    restaurant: User._id,
    dealname: '30 Euro Meal',
    price: 30,
    quantity: 40
  }
];

let promises = offer.map(offer => {
  return User.findOne({ name: offer.name })
    .then(user => {
      if (!user) {
        throw new Error(`User "${offer.name}" was not found!`);
      }
      offer.restaurant = user._id;
    });
});

Promise.all(promises)
  .then(() => Offer.remove())
  .then(() => Offer.create(offer))
  .then(offer => {
    console.log(`created ${offer.length} Offer`);
    mongoose.disconnect();
  });
