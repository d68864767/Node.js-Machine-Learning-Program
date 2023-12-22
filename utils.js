// utils.js

// This file can be used to write utility functions that can be used across the application

// Importing required modules
const tf = require('@tensorflow/tfjs-node');

// Define your utility functions here
const utils = {};

// Function to convert raw data to tensor
utils.convertToTensor = (data) => {
  try {
    // Convert data to tensor
    const tensorData = tf.tensor(data);

    // Return the tensor data
    return tensorData;
  } catch (error) {
    console.error('An error occurred while converting data to tensor', error);
  }
};

module.exports = utils;
