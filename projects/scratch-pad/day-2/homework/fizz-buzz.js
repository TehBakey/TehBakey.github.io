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
    
    //starts loop at 1, incriments by 1 ending at 100 
for(var i=1;i<=100;i++){
    //first if statement checks if value is divisiable by 5 AND 3 using the modulus operator. i.e. if the remainer of 1/5 = 0 if statement completes
		if(i%5 === 0 && i%3 === 0){
		    //returns the string for if statement
			console.log('FizzBuzz');
			//same as previous if statement, but only checking for divisiable by 3
		} else if(i%3 === 0){
			console.log('Fizz');
		} else if(i%5 === 0){
			console.log('Buzz');
			//else statement just outputs i if it doesn't meet previous if statements
		} else {
			console.log(i);
		}
	}



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}