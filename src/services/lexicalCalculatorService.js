// models
const word = require('../models/wordModel');

//repos
const wordRepository = require('../repositories/wordsRepositories');

//helpers
const lexicalDensity = require('../helpers/getLexicalDensity');


exports.calculateLexicalDensity = (req, res, text) => {

    wordRepository.getAllWords().then(words => {

        if (req.query.mode && req.query.mode == 'verbose') {
            let response = calculateVerbose(words, text);
            res.json(response);
        }

        let overall_ld = calculateSimpleLexicalDensity(words, text);

        res.json({
            data: { overall_ld }
        });

    });
};

exports.calculateLexicalDensityVerbose = (req, res, text) => {
    wordRepository.getAllWords().then(words => {
        let response = calculateVerbose(words, text);
        res.json(response);
    });
};


function calculateSimpleLexicalDensity(words, text) {
    let nonLexicalWords = words.map(el => el.term);
    return lexicalDensity(text, nonLexicalWords);
}

function calculateVerbose(words, text) {
    console.log('text', text)
    let overall_ld;
    let sentence_ld = [];
    splitInput = text.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split('|');

    let nonLexicalWords = words.map(el => el.term);

    // Call lexicalDensity calculator for every sentence.
    splitInput.forEach(element => {
        sentence_ld.push(lexicalDensity(element, nonLexicalWords));
    });

    // Calculate the average of Lexical Density
    overall_ld = sentence_ld.reduce((a, b) => a + b, 0) / sentence_ld.length;

    // send response against data key
    return {
        data: { sentence_ld, overall_ld }
    };
};
