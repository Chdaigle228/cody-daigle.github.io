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

function replace(animalArray, animalName, animalObj){
    //iterate over the animal array
    for (var i = 0; i < animalArray.length; i++) {
    // check if name exists
            if(animalArray[i] === animalName.name){
                //if name exists within the animals array replace with replacement object
                animalName.replace(animalArray[i], animalObj)
            } 
    } return
}
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



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
