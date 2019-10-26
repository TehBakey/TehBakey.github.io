/* Control Flow:
 *
 * 0. We can use conditional statements to control the flow of a function. You can think of it almost like a flow chart: if this statement is true -> do this, else do that.
 * You can chain this statements together to have a chain of logic checks so that value that passes each of the checks is pushed out of the function, with a return for
 * each failure along the way, and a defualt statement if none of the conditions are met.
 *       if this is true -> do thing
 *           else if this is true -> do other thing
 *               else if this is true -> do another thing
 *                 else -> every other thing
 *           
 * 1. If statements use the keyword 'if' followed by a specific (condition), if the condition is true the code contained in {} runs. 
 * The condition is any boolean value or boolean expression. 
 *
 * if (condition = true){
 *    do this
 * }
 * 
 * 2. Else-if lets you chain together conditional statements using the keyword else-if. They function like if statements, running the code
 * block contained in {} if the (condition) is ture, but only if the previous statement was false. Once a block of code is excuted the rest
 * of the else-if chain is ignores, so only the first case that passes is pushed.
 *
 * 3. Else works as the final defualt statement at the end of the chain, if none of the other conditions are met this final code will excute. Useful for
 * a catch-all or for error messages.
 *
 * 4. Switch uses the switch keyword to select a code block to be executed if the condition is met. It can run the same code block on multiple cases,
 * the break keyword is used to indicate where to break out or stop the execution of a code block, if you don't include a break statement the next case will be exectuted
 * even if it doesn't mean the condition. 
 *
 * You want to use switch over an if else chain if you're checking for a case to equate to an expression rather than a boolean true/false,
 * you have mutliple values that require the same code, or for readibility and easier syntax.
 */

// 1. If statements:
var x = 1
var y = 0
if (x===1){
    console.log("This is true, x is equal to 1") 
}//prints "This is true, x is equal to 1"
if (y!==1){
    console.log("This is also true, y is not equal to 1")
}//prints "This is also true, y is not equal to 1"
// 2. Else-if statements:
var num1 = 20
var num2 = 4

if (num1<num2){
    console.log("Num1 is less than Num2") //first if statement is false, doesn't excute
} else if (num1>num2){
    console.log ("Num1 is greater than Num2") // prints "Num1 is greater than Num2" to console, the second state is ture AND the first statement is false.
}

// else if chain
const now = new Date(); //sets "now" as the date object when script excutes

console.log(now.getDay()); //logs current day as a number, starting at 0 for sunday

if (now.getDay()=== 0){
  console.log("It's Sunday")
} else if (now.getDay()=== 1){
  console.log("I hate Mondays");}
  else if (now.getDay()> 3){
    console.log("It's the weekend!")
    }
  
/* excutes one of the statements depending on condition met:
 * if (current day) = 0
 *   print "It's Sunday" to console
 *     else (current day) =1
         print "I hate Mondays" to console
           else (current day is greater than index 3 aka thursday)
             print "It's the weekend!" to console
 */

// 3. Else statements

 // if we another an else statement to end of previous chain we get a catchall for all values that don't meet the other conditions, the defualt.
    else{console.log("It's a boring weekday")};  //prints "It's a boring weekday" to the consoles for any value not in previous statements.
    
// 4. Switch statements
var day;  //declares variable 'day'

switch (new Date().getDay()) { //switch checks for the value of current date from date object
  case 0: //case followed by value to be checked
    day = "Sunday"; //reinitalizes var day if case is met
    break; //break singals to stop if case is met
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("Today is " + day) //prints "Today is " + whichever case matched the value

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is the Weekend";
    break; //because there's no break between case 4 and 5, the share the same code block and will excute for either value
  case 0:
  case 6:
    text = "It is the Weekend";
    break;
  default: //defualt runs if there's no case match
    text = "Looking forward to the Weekend";
}
console.log(text) // prints the text var, which is now reintialized based on the result of switch statement