const mongoose = require('mongoose');
const Word = require('../models/wordModel');
const wordList = require('./nonLexicalWords')
const config = require('../utils/config');


const uri = config.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true });


let words = [];

wordList.forEach(el => {
  words.push({ 'term': el })
})


Word.create(words, (err) => {
  if (err) { throw (err) }
  console.log('Created ${words.length} words')
  mongoose.connection.close()
});