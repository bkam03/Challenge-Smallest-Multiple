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
  var productIncrement = ceiling * (ceiling - 1);
  var possibleProduct = productIncrement;  //ceiling might be first convergence point
  var isChosenFactor = false;

  //for(var i = 0; i < 100; i++ ) {
  while( isChosenFactor === false ) { //testing if possibleProduct passes tests
    for( var testingFactor = ceiling - 1; testingFactor > 1; testingFactor-- ) {
      if( possibleProduct % testingFactor !== 0 ) {
        break;
      }
    }
    if( testingFactor <= 1 ) {
      isChosenFactor = true;
    } else {
      possibleProduct += productIncrement;
      testingFactor = ceiling - 1;
    }

  }

  return possibleProduct;
};