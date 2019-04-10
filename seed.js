require('dotenv').config();
require('./lib/utils/connect')();
const seedData = require('./test/seedData.js');
const mongoose = require('mongoose');

seedData()
  .then(() => console.log('done with seedData1'))
  .finally(() => mongoose.connection.close());
  
