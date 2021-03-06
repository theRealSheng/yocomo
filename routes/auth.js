
'use strict';

const express = require('express');
const bcrypt = require('bcrypt');

const User = require('../models/user');

const router = express.Router();
const bcryptSalt = 10;

/* render the login form. */
router.get('/login', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/offers');
  }

  const data = {
    title: 'Login'
  };
  res.render('auth/login', data);
});

/* handle the POST from the login form. */
router.post('/login', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/offers');
  }

  const username = req.body.username;
  const password = req.body.password;

  if (username === '' || password === '') {
    const data = {
      title: 'Login',
      message: 'Indicate a username and a password to sign up'
    };
    return res.render('auth/login', data);
  }

  User.findOne({ 'username': username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      const data = {
        title: 'Login',
        message: 'Username or password are incorrect'
      };
      return res.render('auth/login', data);
    }

    if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user;
      res.redirect('/offers');
    } else {
      const data = {
        title: 'Login',
        message: 'Username or password are incorrect'
      };
      res.render('auth/login', data);
    }
  });
});

/* render the signup form. */
router.get('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/offers');
  }
  res.render('auth/signup');
});

/* handle the POST from the signup form. */
router.post('/signup', (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect('/offers');
  }

  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const email = req.body.email;
  const role = req.body.role ? 'RESTAURANT' : 'BUYER';

  // validate
  // if (username === '' || password === '' || password.length < 5 || !password.match(/[A-Z]/)) {
  //   const data = {
  //     title: 'Signup'
  //   };
  // return res.render('auth/signup');
  // }

  // check if user with this username already exists
  User.findOne({ 'username': username }, (err, user) => {
    if (err) {
      return next(err);
    }
    if (user) {
      const data = {
        message: 'The "' + username + '" username is taken'
      };
      return res.render('auth/signup', data);
    }
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      name,
      email,
      role
    });

    newUser.save((err) => {
      if (err) {
        return next(err);
      }
      req.session.currentUser = newUser;
      res.redirect('/offers');
    });
  });
});

/* handle the POST from the logout button. */
router.post('/logout', (req, res, next) => {
  req.session.currentUser = null;
  res.redirect('/');
});

module.exports = router;
