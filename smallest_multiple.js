/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function( ceiling ) {
  // do work here
  var possibleProduct = ceiling;  //ceiling might be first convergence point
  var testingFactor = 0;  //dividing by larger factors means less operations
  var multipleOfCeiling = 1;

  while( isChosenFactor === false ) { //testing if possibleProduct passes tests
    for( testingFactor = ceiling - 1; testingFactor > 1; testingFactor-- ) {
      if( possibleProduct % testingFactor !== 0 ) {
        break;
      }
    }
    if( testingFactor <== 1 ) {
      break;
    } else {
      multipleOfCeiling++;
      possibleProduct *= multipleOfCeiling;
    }
  }

  return 0;
};