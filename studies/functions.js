/* Functions:
 *
 * 0.  Functions are objects that excute a block of code when they're called/invoked. Functions are followed by a list of (parameters) that work as variables within the
 * the code block which are defined when the function is invoked, agruments are the values passed into the function when invoked. Agruments can be any other datatype,
 * including other functions.
 *
 * 
 * 1.  Functions also have a bulit-in object called agruments, which contains all the agruments passed into a function as an array.
 * Parameters are the vairable created whent he function is defined, agruments are the values passed to those variables. If a function
 * changes the agrument's value it does not change the parameter's oringal value.
 *
 * 2. Functions can be declared with a name or be anoymous function expressions.
 *
 * 3. Functions are effected by hoisting, function declarations are hoisted to the top of their current scope, function expressions are not hoisted- instead only put into
 * memory when the function expression is invoked.
 *
 * 4. Closures: Functions normally only have acess to their own scope and their parents scope. Closures make localy avaible variables outside of their scope when another function
 * nested in the first that refrences and outputs the value from the first.
 */

// 1. Parameters/Agruments

function fun1(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

fun1(1,2,3)

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
// code here can NOT use carName

function myFunction() {
  var catName = "Saturn";

  // code here CAN use carName

}

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
