const { Router } = require('express');
const { connection } = require('../middleware/connection');
const { handler }

module.exports = Router()
  .get('/', connection, (req, res, next) => {
    
  });
