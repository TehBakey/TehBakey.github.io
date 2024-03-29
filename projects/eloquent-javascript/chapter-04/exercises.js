////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//param for step sets it's defualt state to ternary operator. if start < end, true = 1, false = -1
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  // if start and end have same value return empty arr
  if (start === end){
    return array
}

// if checks if step is postive value
  if (step > 0) {
      //for loop pushes i to array if i <= end, interates +1 by defualt
    for (let i = start; i <= end; i += step) array.push(i);
    //else if step a negative value
  } else {
      //same loop but pushes if i >= end
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let total = 0
    for (let i =0; i <=array.length-1;i++){
      total += array[i]
     
    } return total
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let output = [];
  for (let i = array.length - 1; i >= 0; i--) {
    output.push(array[i]);
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
    //for loop iterates by one step as long as i < length of array divided by 2
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
      //sets variable to contain the oringal(i)index of the agrument array
    let old = array[i];
    //values at agrument array index(i) assigned to index of agrument array at the array.length -1 -i, which would be the value on the opposite side of index (i)
    array[i] = array[array.length - 1 - i];
    //sets the values at array[array.length-1-i] to value oringally pulled by loop
    array[array.length - 1 - i] = old;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    //sets list variable set to null to contain our outputed list
  let list = null;
  //for loop loops off array backwards, calling the value at each index
  for (let i = array.length - 1; i >= 0; i--) {
      //sets the value of list to (value: (index of arr at (i)), rest: list}
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
