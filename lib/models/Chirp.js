const mongoose = require('mongoose');

const chirpSchema = new mongoose.Schema(
  {
    chirp: {
      type: String,
      isRequired: true
    },
    user: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    }
  }
  
);

const Chirp = mongoose.model('Chirp', chirpSchema);

module.exports = Chirp;
