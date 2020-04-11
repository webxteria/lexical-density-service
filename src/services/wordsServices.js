
// Model
wordsRepository = require('../repositories/wordsRepositories');



// Handle index actions
exports.index = async function (req, res) {
    let words = await wordsRepository.getAllWords()
    res.json({
        status: 'success',
        data: words
    });
};

// Create word
exports.new = (req, res) => {
    wordsRepository
        .create(req)
        .then(err => {
            if (err) {
                res.json(err);
                console.log(err.message);
            } else {
                res.json({
                    status: 'success',
                    data: word
                });
            }
        });
};

// Get single Word
exports.view = (req, res) => {
    wordsRepository
        .getSingleWord(req.params.word_id)
        .then((err, word) => {
            if (err) {
                res.json(err);
                console.log(err.message);
            } else {
                res.json({
                    status: 'success',
                    data: word
                });
            }
        });
};

// Delete Word
exports.delete = (req, res) => {
    wordsRepository
        .delete(req.params.word_id)
        .then(
            (err) => {
                if (err) {
                    res.json(err);
                    console.log(err.message);
                } else {
                    res.json({
                        status: 'success',
                        message: 'Word deleted successfully'
                    });
                }
            }
        );
};
