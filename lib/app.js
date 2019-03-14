const express = require('express');
const app = express();
const { handler } = require('./middleware/error');
const chirps = require('./routes/chirps');
const connection = require('./middleware/connection');

app.use('/chirps', connection, chirps);
app.use(handler);

module.exports = app;
