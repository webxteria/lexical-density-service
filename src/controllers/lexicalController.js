
//services
const lexicalService = require('../services/lexicalCalculatorService');

// helpers


exports.calculate = function (req, res) {
  // extract data from body
  let { text } = req.body;
  // validate if data exists or not
  if (!text)
    res.status(400).send({ error: 'No input Recieved.' });
  // pass data to lexicalService
  return lexicalService.calculateLexicalDensity(req, res, text)

};

exports.calculateVerbose = function (req, res) {
  // extract data from body
  let { text } = req.body;
  // validate if data exists or not
  if (!text)
    res.status(400).send({ error: 'No input Recieved.' });
  // pass data to lexicalService
  return lexicalService.calculateLexicalDensityVerbose(req, res, text)

};

