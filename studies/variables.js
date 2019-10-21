/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'blake';
console.log(myName); // prints => blake

// 3. re-assignment //
myName = 'bakey';
console.log(myName); // prints => bakey

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * HOISTING & SCOPE:
 *
 * 0. Hoisting is JavaScripts defualt behavior of moving delcarations to the top
 * , whereas initalizations are not.
 * Scope is where a variable is available for use, variables can either be globally
 *  scopped or fuction/locally scoped. A variable declared outside of a function will be
 * global while one declared inside of a function will be local. This behavior 
 * can cause problems in your code.
 *
 * 1. Scope
 * 
 *
 * 2. Hoisting
 */

// 1. scope //
var globalScope ="no error here";

function localTest() {
    var localScope = "local";
}
//console.log(localScope); // error: localScope is not defined
console.log(globalScope) // prints "no error here"

// 2. hoisting //
console.log (greetings);
var greetings = 'hello'
/* JavaScript hoists declarations to the top so the previous code line is interpreted as:
*/
var greetings;
console.log(greetings); // greetings is undefined
greetings = "hello"

/*
 * LET, CONST:
 *
 * 0. Due to hoisting and scope, globally declared variables can cause issues with your code. EC6 added the keywords let and const to adress some of these issues. Both of
 * keywords are block scoped, meaning they only have scope within their code block.
 *
 * 1. LET
 *  let allows you to declare a variable that is block scoped instead of globally/locally like var does. It's value can be changed by code but it cannot be reinitilized
 *
 * 2. CONST
 *  const delcares a code scoped variable with a constant value, it cannot be changed by code nor can it be reinitalized. It's like a read-only file on a computer.
 * 
 */

// 1. Let

let test = 1

function testAdd(x){
  test += x
  console.log(test)
}

testAdd(1) //logs "2" to console, the value has been changed but not reinitilized
//let test = 2 would produce a Syntax error "'test' has already been delcared"

// 2. Const
/*const test= "12"

function addConst(x){
  test += x
  console.log(test)
}

addConst(1)
// - produces error: "TypeError: Assignment to constant variable."
*/
