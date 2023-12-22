// Importing required modules
const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Define your routes here
router.get('/', controller.home);
router.post('/predict', controller.predict);

module.exports = router;
