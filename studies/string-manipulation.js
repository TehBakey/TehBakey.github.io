/*
 * String manipulation:
 *
 * 0.We can manipulation strings in two dirrent ways, operations and methods. Normally a string is not an object and thus cannot have properties or methods, 
 * but JavaSctipt treats them as objects when executing methods or properties. Strings are treated like arrays, with each character holding an index.
 * 1. Operators have unique effects when used on strings. For example Add(+) will join the two string operands as a single string, comparison operators compare 
 * the lengths of both string, while others like multiply will return NaN.
 * 2. Methods can be run on strings to give us diffrent information for the string such as it's length, the index of a certain string within that string,
 * search for a speficied value and return it's index.
 * 3. 

 * */


// 1. Operators //

console.log("big" > "bigger") //logs false

console.log("Hello" + "World") //logs "HelloWorld", note the lack of space since 'space' is a character it's self

console.log("Hello"*"World")  //logs NaN

// 2. Methods //
var string1 = "hello"

console.log(string1.indexOf('hell')) //logs 0, the first index

console.log(string1.indexOf('lo')) //logs 3

console.log(string1.indexOf('howdy'))  //logs -1 since it didn't contain the substring 'howdy'

//splice extracts a substring from within a string using the index of the substring start and the ending index
console.log(string1.slice(0,4)) // retruns 'hell'

//if slice takes one operand it logs the characters after the speficied index
console.log(string1.slice(2)) //logs 'llo'

console.log(string1.toUpperCase()) // logs "HELLO"

console.log(string1.replace('hel', 'hi')) //logs "hilo"

console.log(string1.charAt(0)) //logs "h"

console.log(string1.endsWith("!")) //logs false

console.log(string1.includes("hell")) //logs true
// 3. Properties //


console.log(string1.length) // logs 5, the length of the string "hello"

console.log(string1[string1.length-1]) //logs 'o' the value at the last index of "hello"