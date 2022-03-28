const express = require('express');
const routes = express.Router();
const correios = require('../controllers/freteCorreios');


routes.post('/calcfrete', correios.calcFrete);
  
 
        
module.exports = routes ;      