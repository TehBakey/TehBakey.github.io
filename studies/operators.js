/*
 * Operators:
 *
 * 0. Operators take values and run operations on them. 
 * Takes in vales as operands, JavaScript can run binary, unary, and ternary operations which take in two, one, or 3 operands repectfully
 * They're used for assigment of values, arthmethic, boolean logic, unary (single input), and ternary (3 input) operations.
 * 
 * 1. Assignment operators assign a value of the operand on the left side and assigns it the value of the operand on the right. 
 * The simplest assigment operator is (=), though can also do math assignments (+=) (-=).
 * 2. Arithmethic operators take nummerical values (literal or variables) and returns a single numerical value. Uses the standamd armethic operators (+,-,*,/)
 * 3. Comparison operators takes two values and compares them to each other using operators such as (>,<,>=, etc), retruns a boolean values (true, false)
 * 4. Logical operators represent AND (&&), OR (||), NOT (!) they can be used with comparison operators to return boolean values
 * 5. Unrary operators have only one operand and preforms and operation on it. it can increment & decement (++)(--), be a logical Not operation (!),
 *  give us the type of a operand (typeof), delelte the spefic arry index or object property (delete)
 * 6. Ternary operators takes three operands, the operator can have one of two values based on a condition.
 */


// 1. Assigment //
var x=1
console.log(x) //prints 1

//addtration assigment
var num = 1
console.log(num) //prints 1 to console

num += 1
console.log(num) // prints 2 to console. We're saying num = num + 1

//can also be used with strings
var foo = "foo"

foo += "bar"
//subtractive assignment

console.log(foo) //prints "foobar"

console.log(5-3) //prints 2
console.log(x-=3) //prints -2

//doesnt work with strings
var foobar = "foobar"

console.log(foobar -= "bar") //prints NaN

// 2 Arithmethic opeators //
console.log (1+x)  //returns 2

x = 5
console.log (x*2) //returns 10

// 3 Comparision Operators

console.log(1>0)  //returns true
console.log(0>1)  //retruns false

// 4 Logical Operators

console.log((5>0)&&(5>6)) //retruns false, 5 is greater than 0 but not greater than 0 AND greater than 6

// 5 Unrary operators

var deleteMe= ["delete", "me!"]

console.log(deleteMe) // returns ["delete", "me!"]

delete deleteMe[1] //deletes the value at index 1 of the array

console.log(deleteMe) //["delete", undefined]

console.log(typeof(1)) //returns "Number"

console.log(typeof("one")) //returns "string"

// 6 Ternary Operators //

//takes three operands, the expression followed by the value retruns if true or fale

var status = (age >= 18) ? 'adult' : 'minor';  //if age is >= 18 status = adult, otherwise status = "minor"

var age = 16

console.log(status) //returns "minor", if var age was 18 or higher, var status would be "adult" instead










