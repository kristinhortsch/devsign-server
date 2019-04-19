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
    },
    likeCount: {
      type: Number,
      default: 0
    }
  }
  
);

const Chirp = mongoose.model('Chirp', chirpSchema);

module.exports = Chirp;
