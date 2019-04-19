require('dotenv').config();
require('./lib/utils/connect')();
const mongoose = require('mongoose');

mongoose.connection.dropDatabase().then(() => {
  console.log('database dropped');
  mongoose.connection.close();
});

