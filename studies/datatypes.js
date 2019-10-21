/*
 * Data Types:
 *
 * 0. Data types can be simple/primitive or complex:
 *      *Simple datatypes are not objects and have no methods
 *      *Complex datatypes are either objects; a key/value pair
 *      
 *
 * 1. Number: 
 *      *Numbers are any numerical value: postive, negative, or with decimal points
 * 
 * 2. String: 
 *     *Strings are a collections of numbers and characters surrounded by quotes '' or ""
 *     *The indivual characters can be acessed with bracket notation []
 *     *Can be combied using the + operatior
 *     *Length property returns the total number of characters within strings
 * 
 * 3. Boolean:
 *      *Boolean values are either true or false, almost like an on/off switch
 *      *When using non-strict comparison true =1, false = 0
 *      *Typically used in conditonal statements to preform logic. (If this = true do that)
 *      *Can be created as a boolean expression uusing comparision operators
 * 
 * 4. Array
 *      *Arrays are collections of values contains within brackets, the can contain any of the other value types: including other arrays!
 *      *Each value in the array are refrenced by a index for each value, starting at 0 for the first value
 *      *Length property returns the number of values contained within array
 *      *Can use diffrent methods such as .pop, .push, .shift to modify the the array
 * 
 * 5. Object
 *      *An object is a complex data type contained within curly braces {}
 *      *Objects are ussualy a collections of data relating to a single object/idenity 
 *      i.e. each contact in your phone would be a seperate object with data relating to the person in question
 *      *Can be acessed similar to arrys but instead of using an idex each value is paired with a key within the object
 *      *Objects can contain refrences to any other data type, including other objects & functions!
 * 
 * 6. Function
 *      *Functions are blocks of code contained within {} that excute the contained code with called
 *      *They can be optionally passed agruments which work as variables within the function to be set at call time
 *      *Functions can have other functions nested inside of them, but we'll get into that more in the studies on functions.
 * 
 * 7. Undefined
 *      *Undefined is a primative value assigned to variables which have been delcared but not intialized.
 * 
 * 8. Null
 *      *Null is the intentional absence of a value.
 *      *It's diffrent than undefined as it must be assigned 
 *      *In Javascript, null is techinally an object if you use the typeOf operator on it, this is widely regarded as a bug
 * 
 * 9. NaN
 *      *Represents "Not-A-Number", it's rare to use NaN in a program, more often it's a returned value when a math function fails
 * 
 * 10. Infinity and -Infinity
 *      *Infinity & -Infinity are variables respresenting the values of inifinity both postive and negative. If you were looking
at a number line, postive infitiy would be all the values from postive one onewards, negative infinity from -1 onwards. 
        *These behave like mathematical infitiny with slight diffrences.
  
 */


// 1. Number //
console.log (1+1); //retruns 2
console.log (1-1); //returns 0
console.log (21*2); //returns 42
console.log (42/2); 
                        //returns 21
var x = 1 //numbers can also be variables

console.log (x+1) //returns 2

// 2. String //
console.log("Hello") //prints "hello" to console

console.log("abc123") //prints "abc12" to console
console.log("abc123"[3]) //returns 1

console.log("Howdy" + "Partner") //returns "HowdyPartner"

console.log("thisisaprettylongstring".length) //returns 23

// 3. Boolean //
console.log(1<2); // returns true
console.log(1>2); //returns false

console.log(false == 0) //returns true

function greaterTest(num1, num2){
    if (num1 > num2){
        return true
    } else return false
}

greaterTest(1,2) //returns false

var myBool

myBool =1 === "1";

console.log(myBool) //returns false because the number 1 is not strictly equal to the string "1"

// 4 Array //

var arr = [1, "two", true]  //arr is now an array, containing a number, string, and boolean value

console.log(arr)  // retruns [1, "two", true]

arr.push(1,2,3['red','blue']) //push method 'pushes' new values to the end of the array

console.log(arr) //retruns [1, "two", true, 1, 2, 3, ['red', 'blue']], the last value being another array nested inside the first

console.log(arr.length) //returns 7

console.log (arr[arr.length-1]) // retruns ["red", "blue"], since index starts at 0 the last value in an array will always be it's length -1

// 5 Object //

var blakeObject = {
    firstName: "Blake",
    lastName: "Cooley",
    age: 31,
    pet: "Saturn"
}

console.log(blakeObject) 
/* prints to console:
[object Object] {
  age: 31,
  firstName: "Blake",
  lastName: "Cooley",
  pet: "Saturn"
}
*/

console.log (blakeObject['pet']); //prints "Saturn", the value paired with the paied with the key "pet", to the console

console.log (Object.keys(blakeObject)); //prints ["firstName", "lastName", "age", "pet"], the keys within blakeObject as an array, to the console

blakeObject.pet = {
    type: "Cat",
    name: "Saturn",
    color: "Orange"
}

console.log (blakeObject['pet']); 
/*prints [object Object] {
  color: "Orange",
  name: "Saturn",
  type: "Cat"
}

Now the 'pet' key as a another object nested inside the first as it's value
*/

console.log(blakeObject['pet'].type) //prints "Cat" to the console

//6 Function //

function greeting (name) {
    console.log("Hello " + name)
}

//The function keyword delcares a function, named greeting, with the agrument (name)

greeting("Blake") //Calls the function with "Blake" as the agurment for (name), printing "Hello Blake" to the console

// 7 Undefined //
var foo
// console.log(foo); will throw up a refrence arror since it has not be define
// the variable "foo" exists but it has been assigned no value

//8 Null //

var foo = null

console.log(foo);  //prints Null to the console

console.log(typeof null); // prints "Object" to the log, this is bug. In actuallity null cannot be an object because it's specficly the absense of value.

// 9 NaN //
console.log (Math.sqrt(-1));   //prints "NaN" to the console log since there's no real number which can be mutlipled by it's self to get a negative

// 10 Infinity and -Infinity

console.log(Infinity          ); // prints Infinity to the console.  
console.log(Infinity + 1      ); // prints Infinity to the console. 
console.log(Math.pow(10, 1000)); // prints Infinity to the console. 
console.log(1 / Infinity      ) // prints Infinity to the console.  
console.log(1 / 0             ); // prints -Infinity to the console. In normal math this would come back as undefined, but JavaScript handles undefined diffrently.

