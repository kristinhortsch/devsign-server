const Chirp = require('../lib/models/Chirp');
// const chance = require('chance').Chance();
const { getQuote } = require('../lib/services/quotes');

const seedData = () => {
  return Promise.all(
    [...Array(10)].map(() => {
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


/*[...Array(10)].map(async() => {
  getQuote().then(quote => {
    return Chirp.create({
      chirp: quote,
      user: 'auth0|5cad2cd456fc520ebfaff30a'
    });
  })
});
*/

/*
return Promise.all(
    [...Array(10)].map(() => {
      getQuote()
        .then(quote => {
          return Chirp.create({
            chirp: quote,
            user: 'google-oauth2|102356666328752319799'
          });
        });
    })
  );
*/
