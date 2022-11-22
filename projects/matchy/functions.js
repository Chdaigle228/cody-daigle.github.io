/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { animals, animal } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function with animals array (arr) and a string (str);
function search(arr, str){
        //create for loop to iterate over object
        for (var i = 0; i < arr.length; i++) {
            //if Array index is === str then return the array index
          if (arr[i].name === str) {
            //return array index if true
             return arr[i];
            } 
    
        } return null;
    } 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
//     - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
//     - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//     - Otherwise do nothing.
//   2. Preview the `index.html` page to test it on the website.
// animals = array
//name = string
// replacement = object
function replace(animals, name, replacement){

       //iterate over the animal array
    for (var i = 0; i < animals.length; i++) {
        //animals[i] = is every object, not its properties
    // check if name exists within the objects
            if(animals[i]["name"] === name){
                //if name exists within the animals array replace with replacement object
               animals[i] = replacement
            } 
    } return null;
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// ## Step 3 - Remove
//  1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
//    - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
//    - If an animal with that name exists within the `animals` Array, remove it.
//  2. Test that it works on the website.
//animals = array
//name is name of animal used to search
function remove(animals, name){
    //for loop to iterate through the array
    for(var i = 0; i < animals.length; i++){
        var animal = animals[i]
        //if name exists within array's indexes
        if(animal.name === name){
            //remove from array
           animals.splice(i, 1)
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//     - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//     - Checks that the animal Object has a `name` property with a length > 0.
//     - Checks that the animal Object has a `species` property with a length > 0.
//     - Has a **unique** name, meaning no other animals have that name.
//     - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//     - Make sure it works.

//animals = array
//animal = new animal being added
function add(animals, animal){
    //check animal object for name property with length > 0
    if(animal.name && animal.name.length > 0){
        //check animal object for species property with length > 0
       if(animal.species && animal.species.length > 0){
        //if it has a unique name
        var animalExists = search(animals, animal.name)
        if(animalExists === null){
            animals.push(animal);
        }
       
         
         
       }
    }
    
    
    
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
