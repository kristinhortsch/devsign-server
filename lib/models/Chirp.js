const mongoose = require('mongoose');

const chirpSchema = new mongoose.Schema({
  text: {
    type: String,
    isRequired: true
  },
  user: {
    type: String,
    required: true
  }
});

const Chirp = mongoose.model('Chirp', chirpSchema);

module.exports = Chirp;