//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
 return Object.values(object)
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var arr = Object.keys(object)
 return arr.join(" ");}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // arr = array to contain values form object using .values
var arr =Object.values(object)
// newarr = array to contain the values filtered from for loop
var newarr = []

console.log(arr)
//for loop goes through each index (i) of arr
for (i=0; i<= arr.length-1; i++){
    //if statment checks if the type of values at the (i) index is string type
  if (typeof arr[i] === "string"){
    console.log(arr[i])
    //pushes value at the (i) index to newarr
    newarr.push(arr[i]);
  }
  // sets newarr variable to arr.join(" "); whichs concats the array as a string. If you left () blank, it will join with a , instead
} newarr = newarr.join(" ");
//returns newarr which is now a string
return newarr

}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(value) {
    if (Array.isArray(value)){
      return "array";
//uses isinstanceof operand to check if value is an instance of a date, returns false if is
  } else if (value instanceof Date){
      return false;
// checks if value null, if so return false
  } else if (value === null){
      return false;
// checks if value is an object after failing first 3 if's, elimating any false postives, returns true
  } else if (typeof value === "object"){
      return "object";
//else is catch all for all other values: strings, numbers, etc
  } else {
      return false;
  }    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  //concats the values of string.charAt(0).toUpperCase() and string.slice(1)
  // charAt(0).toUpperCase = first letter in zero index captialized + string.slice(1) = the rest of the string from index 1
return string.charAt(0).toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //sets splitStr to an array containing each of the words in the string seperated with a space
      var splitStr = string.toLowerCase().split(' ');
      //loop which goes over index of array
   for (var i = 0; i < splitStr.length; i++) {
       //sets the value for each index like previous function
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
  //returns array as a string joined with a space
   return splitStr.join(' '); 
} 


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var name = capitalizeWord(object.name)
    return "Welcome " + name +"!"

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
        var name = capitalizeWord(object.name)
        var species = capitalizeWord(object.species)
    return name +" is a " + species

}



//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (typeof(object.noises) !== "undefined" && typeof(object.noises[0]) !== "undefined" ){
        return object.noises.join(" ")
    } else {return "there are no noises"}

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)){
        return true
    } else{ return false}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (typeof(object.friends) !== "undefined" &&object.friends.includes(name)){
        return true
    } else return false

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}