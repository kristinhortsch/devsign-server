const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Chirp = require('../models/Chirp');
const { populateUsers } = require('../services/auth');

module.exports = Router()
  .post('/', ensureAuth(), (req, res, next) => {
    const { text } = req.body;
    Chirp
      .create({ text, user: req.user.user_id })
      .then(chirp => {
        res.send(chirp);
      })
      .catch(next);
  })

  .get('/', ensureAuth(), (req, res, next) => {
    Chirp
      .find()
      .lean()
      .then(chirps => populateUsers(chirps))
      .then(chirps => res.send(chirps))
      .catch(next);
  });
  
// Chirp
//   .findOneAndDelete({ _id: IDBKeyRange, user: req.user.user_id })
