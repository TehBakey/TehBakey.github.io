// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    
// if checks if end is greater than start, if so goes into for loop
if (end > start){
//initilize fwdArray as array literal to store values from loop
       var fwdArray = [];
// for loop starts at 'start' checking if each iteration is <= to end, incrimating by one each pass>     
 for (var i = start; i <= end; i++)
{
 //use push method to add each loop to the arr var
  fwdArray.push(i);
}
//returns newArray now with the values from the loop inside
return fwdArray
// else statement does the same in reverse, since if end !> start it can only be the opposite
   }else{
       var revArr = [];
       for (var i = start; i >= end; i--){
           revArr.push(i);
       } return revArr
   }
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}