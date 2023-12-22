// Importing required modules
const model = require('./model');

// Define your controller here
const controller = {};

// Home route controller
controller.home = (req, res) => {
  res.send('Welcome to the Node.js Machine Learning Program');
};

// Predict route controller
controller.predict = async (req, res) => {
  try {
    // Get data from request body
    const data = req.body;

    // Use the model to make a prediction
    const prediction = await model.predict(data);

    // Send the prediction as a response
    res.json({ prediction });
  } catch (error) {
    // Handle error
    res.status(500).json({ error: 'An error occurred while making a prediction' });
  }
};

module.exports = controller;
