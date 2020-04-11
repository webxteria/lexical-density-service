
const getLexicalDensity = (inputString, nonLexicalArr) => {

  /* contraints checkpoint i.e. 
   * input String should be less then of 1000
   * input String should be of string type
   * should be more then 1
   * nonlexicalarray should not be empty 
   */

  if (
    typeof inputString !== 'string' ||
    inputString.length < 1 ||
    inputString.length > 1000 ||
    !nonLexicalArr
  )
    return false;

  /*
   * sanitize input from punctuations special characters
   * remove all white spaces
   * convert all characters to lower case to handle case sensitive issue
   * filter all empty strings
   */

  let sanitizedString = inputString
    .trim()
    .toLowerCase()
    .replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, ``)
    .split(' ')
    .filter(item => item !== '');

  if (sanitizedString.length > 100) {
    return false;
  } else {
    // wordcount of sanitizedString string
    const wordCount = sanitizedString.length;

    // Filter sanitizedString against nonLexicalWords array.
    let result = sanitizedString.filter(word => !nonLexicalArr.includes(word));
    let overall_ld = Number((result.length / wordCount).toFixed(2));
    return overall_ld;
  }
};

module.exports = getLexicalDensity;
