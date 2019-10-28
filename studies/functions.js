/* Functions:
 *
 * 0.  Functions are objects that excute a block of code when they're called/invoked. Functions are followed by a list of (parameters) that work as variables within the
 * the code block which are defined when the function is invoked, agruments are the values passed into the function when invoked. Agruments can be any other datatype,
 * including other functions.
 *
 * 
 * 1.  Functions also have a built-in object called agruments, which contains all the agruments passed into a function as an array.
 * Parameters are the variable created when the function is defined, arguments are the values passed to those variables. If a function
 * changes the agrument's value it does not change the parameter's oringal value.
 *Paramaters that are not declared will return undefined, defualts can be set in the (paramters) ex: myFunction(a=1, b)
 *Arguments object contains an array of agruments used when function was called
 * 2. Functions can be declared with a name or be anonymous function expressions.
 *
 * 3. Functions are effected by hoisting, function declarations are hoisted to the top of their current scope, function expressions are not hoisted- instead only put into
 * memory when the function expression is invoked.
 *
 * 4. Closures: Functions normally only have acess to their own scope and their parents scope. Closures make locally availiable variables outside of their scope when another function
 * nested in the first that refrences and outputs the value from the first. The outter function declares variables that the inner function can interact with where normally a two seperate functions
 * would not be able to acess each other's variables due to scope.
 */

// 1. Parameters/Agruments

function fun1(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

fun1(1,2,3)


function funx(x, y=1){
 return x + y;}
 
 console.log(funx(5)) // logs 6
 console.log(funx(5,2)) // logs 7

//console logs 1 2 3 on a new line for each value, a, b, c are the parameters for the function, 1, 2 ,3 are the arguments (values passed into the parameters at call time)

// 2. Named / Anon functions

function fun2(param1){
    console.log(param1)
}

fun2("hello") //logs "hello" to console by invoking the named function

var x = function (a, b) {return a * b};
var z = x(4, 3);

console.log(z) //console logs "12", var x is set to an anon function expression

// 3 Hoisting/Scope of functions //

//console.log(catName) returns an error, catName is undefined because it is localy scoped to the function block
// code here can NOT use catName

function myFunction() {
  var catName = "Saturn";

  // code here CAN use carName

}

// another example, both use var test, but each have a diffrent scope
var test = "I'm global";

function testScope() {
  var test = "I'm local";

  console.log (test);     
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global

//4 Closures //
function Person (paramName){
    var name = paramName;
    
    this.getName = function(){
        console.log(name);
    };
}

var me = new Person("Blake")

me.getName() //consle logs "Blake"

function Person1 (name){
    var name = name;
}

var me2 = new Person1("Blake")

console.log(me2) //console logs an object literal because the name varable is outside of our scope

console.log(me2.name) //prints "undefined" to console

// another example:

// Initiate counter
var counter = 0;

// Function to increment counter
function add() {
  var counter = 0;
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

//The counter should now be 3. But it is set the the global variable counter = 0

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3