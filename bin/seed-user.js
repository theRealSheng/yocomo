
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost/yocomo');

const User = require('../models/user');

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const p1234encrypted = bcrypt.hashSync('1234', salt);

let users = [
  {
    username: 'resta',
    name: 'Restaurant 88',
    email: 'sheng@hotmail.com',
    role: 'RESTAURANT',
    password: p1234encrypted
  },
  {
    username: 'sheng',
    name: 'sheng',
    email: 'sheng@hotmail.com',
    role: 'BUYER',
    password: p1234encrypted
  },
  {
    username: 'resta@',
    name: 'Restaurant 2',
    email: 'sheng@gmail.com',
    role: 'RESTAURANT',
    password: p1234encrypted
  }
];

User.remove()
  .then(() => User.create(users))
  .then(users => {
    console.log(`created ${users.length} users`);
    mongoose.disconnect();
  });
