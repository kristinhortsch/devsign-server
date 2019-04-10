const Chirp = require('../lib/models/Chirp');
const { getQuote } = require('../lib/services/quotes');

const seedData2 = () => {
  return Promise.all(
    [...Array(5)].map(() => {
      return getQuote()
        .then(quote => {
          return Chirp.create({
            chirp: quote,
            user: 'auth0|5cad2cd456fc520ebfaff30a'
          });
        });
    })
  );
};

module.exports = seedData2;


