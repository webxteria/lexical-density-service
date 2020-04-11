const Word = require('../models/wordModel');

exports.getAllWords = async function () {

    return await Word.find({});
}

exports.getSingleWord = async function (id) {
    return await Word.findById({ _id: id });
}

exports.create = async function (req) {
    let word = new Word();
    word.term = req.body.term;
    return word.save();
}

exports.delete = async function (id) {
    return await Word.remove({ _id: id });
}
