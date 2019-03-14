const { Router } = require('express');
// const { HttpError } = require('../middleware/error');
const Chirp = require('../models/Chirp');

module.exports = Router()
  .get('/', (req, res, next) => {
    Chirp
      .find()
      .lean()
      .then(chirps => res.send(chirps))
      .catch(next);
  });
  
