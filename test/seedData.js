const Chirp = require('../lib/models/Chirp');
const { getQuote } = require('../lib/services/quotes');

const seedData = () => {
  return Promise.all(
    [...Array(5)].map(() => {
      return getQuote()
        .then(quote => {
          return Chirp.create({
            chirp: quote,
            user: 'google-oauth2|102356666328752319799'
          });
        });
    })
  );
};

module.exports = seedData;


