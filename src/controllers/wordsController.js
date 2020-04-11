
// Services
const wordService = require('../services/wordsServices');


// Get all words
exports.index = function (req, res) {
  return wordService.index(req, res);
};

// Create word
exports.new = (req, res) => {
  return wordService.new(req, res);
};

// Get Single word
exports.view = (req, res) => {
  return wordService.view(req, res);
};

// Delete Word
exports.delete = (req, res) => {
  return wordService.delete(req, res);
};
