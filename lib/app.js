const express = require('express');
const app = express();
const { handler } = require('./middleware/error');
const chirps = require('../lib/routes/chirps');
const connection = require('./middleware/connection');

app.use(require('./middleware/cors'));
app.use(express.json());
app.use('/chirps', connection, chirps);
app.use(handler);

module.exports = app;
