
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
let string = '#';
while (string.length <= num) {
  console.log(string);
  string = string + '#';
}
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start,end) {
    
    //starts loop at 1, incriments by 1 ending at 100 
for(var i = start; i <= end; i++){
    //first if statement checks if value is divisiable by 5 AND 3 using the modulus operator. i.e. if the remainer of 1/5 = 0 if statement completes
		if(i%5 === 0 && i%3 === 0){
		    //returns the string for if statement
			console.log('fizzbuzz');
			//same as previous if statement, but only checking for divisiable by 3
		} else if(i%3 === 0){
			console.log('fizz');
		} else if(i%5 === 0){
			console.log('buzz');
			//else statement just outputs i if it doesn't meet previous if statements
		} else {
			console.log(i);
		}
	}

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
var size = num; //this is the variable setting

var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < size; y++) {   /*in the outer loop we add newline to seperate rows*/
  for (var x = 0; x < size; x++) {/*every inner loop represents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
