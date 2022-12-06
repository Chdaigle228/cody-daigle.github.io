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
    return customer.gender === "male";
    }); return males.length;
}
var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
            //determine if current object has a gender of female
            if(current.gender === 'female'){
                //return adding 1
                return accumulator + 1; //0 + 1
            }else {
                return accumulator
            }
                //if true, add 1 to acumulator
    }, 0);                 //seed value is 0 => number of female customers
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
let oldest = _.reduce(array, function(accumulator, current){
    if(accumulator.age > current.age){ // if 37 > 26
        return accumulator; // return accumulator
    }else {
        return current
        
     }// => {youngest customer}
    }); return oldest.name;
}; //return the name of the youngest customer object


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

var youngestCustomer = function(array){
let kid = _.reduce(array, function(accumulator, current){
    if(accumulator.age < current.age){ 
        return accumulator; // return accumulator
    }else {
        return current;
        
     }// => {oldest customer}
    }); return kid.name;
}; //return the name of the oldest customer object
//cannot access numbers becuase they are strings in the file. Remove symbols with .replace(item to be removed, item to take place)
var averageBalance = function(array){ 
    var sum = _.reduce(array, function(acc, curr){
      var bal = curr['balance'].replace(/[$,]/g, "");
      var flt = parseFloat(bal);
        return acc + flt;
    }, 0);
    var avg = sum / array.length;
    return avg;
};
//  npm start --prefix ./cody-daigle.github.io/projects/let-s-get-functional
var firstLetterCount = function(array, letter){
    var char = _.reduce(array, function(acc, curr){
        var firstChar = curr['name'].toUpperCase().startsWith(letter.toUpperCase()); //firstChar = the first letter of every name
        return acc + firstChar;
    }, 0);
    return char; //return the number of first characters
};
//Find how many friends of a given customer have names that start with a given letter
function friendFirstLetterCount(array, customer, letter) {
      //filter through the customers and match names
  const filtered = array.filter(cust => cust.name === customer)[0];
  //account for no friends.
  if (!filtered){
    return 0;
    //filter through friends
  } return filtered['friends'].filter(friend => friend['name'].toUpperCase().startsWith(letter.toUpperCase())).length;
} 
// npm start --prefix ./cody-daigle.github.io/projects/let-s-get-functional

//Find the customers' names that have a given customer's name in their friends list
var friendsCount = function(array, name){
   
      //filter through the customers and match names
      const customer = array.filter(customer => customer['friends'].name);
    var filterName = customer + friends.name;
      return filterName//['friends'].filter(friend => friend.name);
    }



var topThreeTags = function(array){
    
}

var genderCount = function(array){
    var sex = {};
    return array.reduce((acc, curr) => {
        if(curr.gender === 'male'){
            acc.male++;
        } else if(curr.gender === 'female'){
            acc.female++;
        } else {
            acc.nonbinary++
        }
    }, 0);
    return sex;
}

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
