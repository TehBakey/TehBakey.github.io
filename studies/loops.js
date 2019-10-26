/* Loops:
 *
 * 0.  Loops allow you to continue excuting the same block of code repeatedly untill a condition is met. You start with a key word (if, while, for-in ) followed by the 
 * paramaters of your loop. 
 *
 * 1. For loops are followed by three statements. The statements are: a variable that acts as the start of your counter, a conditional statement to be met, 
 * the amount to incriment each iteration if condition is not met. The code block will continue to run untill the conditional statement becomes true, ending the loop. 
 * (counter =0, if counter is greater than 4, count up)
 * 
 * 2. While loops is followed by a condition statement, while continues to excute a block of code as long as the statement is true.
 * while (variable is true){do thing}
 * 
 * 3. For-in loops loops through the properties of an object. It's followed by a statement (key in object), key being the return value 
 * and object being the object you are looping through. Objects can be objects, arrays, or even primiatives due to JavaScripts behavior
 */

// 1. For loop //

var arr = [1,2,3,4,5];

for (i = 0; i <= arr.length-1; i++){ //counter = 0, if counter is less than or equal to the length property of arr-1, increment by 1
    console.log(arr[i]) //logs the value of the coutner as the index of arr
} //prints each index of arr forwards to console with each value on a new line

for (i = arr.length-1; i>= 0; i--){ //counter = length property of arr-1, if counter is greater than or equal to 0; deincriment by 1
    console.log(arr[i])
} //prints each index of arr backwards to console with each value on a new line

// 2. While loops

var i = 0; //sets var x = 0
while (i < 10) { //conditin statement set to while i is less than 10
  console.log(i); //code block logs the number to the console and incriments i by 1
  i++;
} //prints each value from 0 to 9 in the console log, new line for each value

var i = 9
while (i >= 0) { 
  console.log(i); 
  i--;
} //prints each value from 9 to 0 in the console log, new line for each value

// 3. For In loops

var obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3"
}


for (key in obj){
  console.log(key)
}

/*logs
      "key1"
      "key2"
      "key3"
*/
