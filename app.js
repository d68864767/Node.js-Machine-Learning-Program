// Importing required modules
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Use JSON middleware to parse JSON bodies
app.use(express.json());

// Use the routes
app.use('/', routes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
