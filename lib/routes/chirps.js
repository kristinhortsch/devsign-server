const { Router } = require('express');
const ensureAuth = require('../middleware/ensureAuth');
const Chirp = require('../models/Chirp');
const { populateUsers } = require('../services/auth');

module.exports = Router()
  .post('/', ensureAuth(), (req, res, next) => {
    const { chirp } = req.body.chirp;
    console.log('REQ.BODY', req.body.chirp.chirp);
    const user = req.user.sub;
    Chirp
      .create({ chirp, user: user })
      .then(createdChirp => {
        res.send(createdChirp);
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
  })

  .get('/users/:id', ensureAuth(), (req, res, next) => {
    const { id } = req.params;
    Chirp
      .find({ user: id })
      .then(chirps => res.send(chirps))
      .catch(next);
  })
  

  .delete('/:id', ensureAuth(), (req, res, next) => {
    const { id } = req.params;
    Chirp
      .findOneAndDelete({ _id: id, user: req.user.user_id })
      .then(deletedChirp => res.send(deletedChirp))
      .catch(next);
  });
  
