// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

for(var i = 1; i <= 100; i++){
    //define variable within function
    var num = "";
    //create if statement to pull remainders of 3 for fizz
    if (i % 3 === 0) num += "Fizz";
    //create if statement to pull remainders of 5 for buzz
    if (i % 5 === 0) num += "Buzz";
    //log the remainder (3 or 5) OR a number that is neither a mult of 3 & 5
    console.log(num || i)
}
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}