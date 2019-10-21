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
// uses Array.isArray() method to check if value is an array, typeof would return 'object' instead
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
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
//calls previous method to test if value is an array, returns false if it is
if (isArray(value)){
      return false;
//uses isinstanceof operand to check if value is an instance of a date, returns false if is
  } else if (value instanceof Date){
      return false;
// checks if value null, if so return false
  } else if (value === null){
      return false;
// checks if value is an object after failing first 3 if's, elimating any false postives, returns true
  } else if (typeof value === "object"){
      return true;
//else is catch all for all other values: strings, numbers, etc
  } else {
      return false;
  }
    
    
    
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
// same as above but checks if array is true instead of false on first if
if (Array.isArray(value)){
      return true;
  } else if (value instanceof Date){
      return false;
  } else if (value === null){
      return false;
  } else if (typeof value === "object"){
      return true;
  } else {
      return false;
  }
    
    
    
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
    
//first if runs isArray function and returns "array" string if true
if (isArray(value) === true){
  return "array"
// else if checks if value is null, and returns "null" string
    }else if (value === null){
       return 'null'
//else if check if value is instance of date, returns "date" string
  } else if (value instanceof Date === true){
    return "date"
// final else returns typeof of value returning the rest of the results without the previous if's
  }else return typeof value
    
    
    
    
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
