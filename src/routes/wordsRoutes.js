// dependencies
let router = require('express').Router();

// Import Controller
const wordsController = require('../controllers/wordsController');


// Word routes
router
  .route('/words')
  .get(wordsController.index)
  .post(wordsController.new);

router
  .route('/words/:word_id')
  .get(wordsController.view)
  .delete(wordsController.delete);

// Export API routes
module.exports = router;
