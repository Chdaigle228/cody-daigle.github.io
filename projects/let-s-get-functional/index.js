// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./cody-daigle.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
 let males = _.filter(array, function(customer){
})

var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
            //determine if current object has a gender of female
            if(current.gender === 'female'){
                return accumulator + 1; //0 +1
            }else {
                return accumulator
            }
                //if true, add 1 to acumulator
    }, 0) //seed value is 0 => number of female customers
    return females;
}
/*
//invoke reduce
//result = 0
// iterate through array
    //0
        //result = func(result, array[i], 0, [...]) = 1
        //1
        //result = func(1, {...}, 1, [...]) = 
*/

var oldestCustomer = function(array){
let oldest = reduce(array, function(accumulator, current){
    if(accumulator.age > current.age){ // if 37 > 26
        return accumulator; // return accumulator
    }else {
        return current
    }
    }); // => {oldest customer}
}; //return the name of the oldest customer object


/*
invoke reduce without the seed starting at the first index
    //reduce = {name: 'Adele Mullin'}
    //iterate at index 1 becuase it did not have a seed
        //1
            //result = func(result, array[i], 0, [...])
        result = {name: 'Adele Mullin'}
        //2
            //result = func()

 */

var youngestCustomer;

var averageBalance;
letStr = balance.replace('$', '') // can use regular expression (/[$]/g, "")
//cannot access numbers becuase they are strings in the file. Remove symbols with .replace(item to be removed, item to take place)
var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
