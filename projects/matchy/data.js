/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create object
var animal = {};
//species in dot notation
animal.species = "Dog";
//name in bracket notation
animal["name"] = "Chloe";
//noises in any notation
animal.noises = [];
//log the animal object
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//noises array
var noises = [];
//noises in bracket
noises[0] = "Bark";
//func to add noise
noises.push("Grrr");
//add noises to beginning
noises.unshift("Woof");
//adding noise no matter how many elements
noises[noises.length] = "Whine";
//log the length of noise array
console.log(noises.length);
console.log([noises.length - 1]);
console.log(noises);



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// ## Step 3 - Combining Step 1 and 2
//  1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal["noises"] = noises
//  2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
animal.noises.push("Growl")
//  3. [ ] `console.log` `animal`.
console.log(animal)
//  4. [ ] Does it look right?
//Sure

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];
//push animal to animals
animals.push(animal);
//log the animals
console.log(animals);
var duck = {
  species: 'duck', 
  name: 'Gerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
} 
animals.push(duck);
console.log(animals);
var cat = {
  species: 'cat', 
  name: 'Ambrose', 
  noises: ['meow', 'chirp', 'sneeze', 'swat']
} 
animals.push(cat);
var panda = {
  species: 'panda', 
  name: 'Jerry', 
  noises: ['munch', 'huff', 'sneeze', 'snore']
} 
animals.push(panda);
console.log(animals);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [x ] Choose a data structure for this **list** of friends.
// 2. [ x] Write a comment in your code that explains why you chose this data structure.
// team chose an array to easily map out friends list
// 3. [ x] Create a variable called `friends` and assign it to the data structure that you chose.
var friends = [];
// 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
function getRandom(){
  return Math.floor(Math.random() * animals.length);
} 
// 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
friends.push(animals[getRandom(animals)].name);

// 7. [ ] `console.log` `friends`.
console.log(friends);
// 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
animals[getRandom(animals)]['friends'] = friends;
// 9. [ ] `console.log` your work.



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}