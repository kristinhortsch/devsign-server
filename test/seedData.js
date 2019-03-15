const Chirp = require('../lib/models/Chirp');
const chance = require('chance').Chance();

const seedData = () => {
  return Promise.all(
    [...Array(100)].map(() => {
      return Chirp.create({
        text: chance.sentence(),
        user: 'google-oauth2|102356666328752319799'
      });
    })
  );
};

module.exports = seedData;
