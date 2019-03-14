const Chirp = require('../lib/models/Chirp');
const chance = require('chance').Chance();
const seedData = () => {
  return Promise.all(
    [...Array(100)].map(() => {
      return Chirp.create({
        text: chance.sentence(),
        user: chance.name()
      });
    })
  );
};



module.exports = seedData;
