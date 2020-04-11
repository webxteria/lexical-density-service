// Dependencies
let router = require('express').Router();
// Controllers
const lexicalController = require('../controllers/lexicalController');

/*
 * complexity routes
 * this route works for both with get param and without get param
 * it works for /complexity and also /complexity?mode=verbose
 */
router
  .route('/complexity')
  .post(lexicalController.calculate);

/* route cannot be differentiate by get params in that case
 * if we want to active we have to make it a url segment instead 
 * of get param. This route behave exactly like /complexity?mode
 * example: /complexity/verbose and /complexity?mode=verbose will 
 * be same in response
 */
router
  .route('/complexity/verbose')
  .post(lexicalController.calculateVerbose);

// Export API routes
module.exports = router;
