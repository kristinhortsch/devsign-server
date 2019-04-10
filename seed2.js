require('dotenv').config();
require('./lib/utils/connect')();
const seedData2 = require('./test/seedData2.js');
const mongoose = require('mongoose');

seedData2()
  .then(() => console.log('done with seedData2'))
  .finally(() => mongoose.connection.close());
  
