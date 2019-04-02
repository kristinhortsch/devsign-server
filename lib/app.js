const express = require('express');
const app = express();
const { handler } = require('./middleware/error');
const chirps = require('./routes/chirps');
const connection = require('./middleware/connection');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use('/chirps', connection, chirps);
app.use(handler);

module.exports = app;
