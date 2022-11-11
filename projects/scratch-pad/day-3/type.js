// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //determine if value is an array or not
    return Array.isArray(value);
  
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 * 
 * I: value
 * O: true if value is an object in a collection
 * C: not null, an array, not a date
 * E:
 */
function isObject(value) { // { a: 1, b: 2} < -- true
    // YOUR CODE BELOW HERE //
// test for array
   if(isArray(value)){
    return false;
    //test for null
   }else if (value === null){
    return false;
    //test for date
   }else if (value instanceof Date){
    return false;
    //test for primitive datatypes
   } else if (typeof value !== 'object'){
    return false;
    //test for everything else AKA 'object'
   }else {
    return true}


//}

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
 //test for object
// test for array & object

    //test for null
   if (value === null){
    return false;
    //test for date
   }else if (value instanceof Date){
    return false;
    //test for primitive datatypes
   } else if (typeof value !== 'object'){
    return false;
    //test for everything else AKA 'object' & 'array'
   }else {
    return true}
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
// given the value return the datatype as a string
for 
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}