const express = require('express');
const controller = require('../controller/controller.js');

const businesses = express.Router();

businesses.get('/businesses', controller.findBusinesses);
businesses.get('/all', controller.findAllBusinesses);

module.exports.businesses = businesses;