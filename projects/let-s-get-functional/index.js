// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-tehbakey");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    // must use filter func
   var malesarr = _.filter(array, function(customerObj, i, array){
        return customerObj.gender === 'male'
    })
    return malesarr.length
};
// !!!mod to use reduce!!!
// var femaleCount = function(array) {
//     var femalesarr = _.filter(array, (customerObj, i, array) =>{
//         return customerObj.gender === 'female'
//     })
//     return femalesarr.length
// }

var femaleCount = function(array){
    return _.reduce(array, function(acc, customer){
        customer.gender === 'female' ? acc++ : null;
        return acc;
    }, 0);
};

var oldestCustomer = function(array) {
    let oldest = array[0].age
    _.each(array, (el) =>{
        oldest = (el.age > oldest) ? el.name : oldest
    });
    
    return oldest;
}

var youngestCustomer = function(array){
    let ages = []
    _.each(array, function(el) {
        ages.push(el.age)
        })
    let youngest = Math.min.apply(Math, ages);
    
    _.each(array, function(el){
        youngest = (el.age === youngest) ? el.name: youngest
    })
    return youngest;
}

var averageBalance = function(array){
    
    let balances = []
 _.each(array, function(el){
     balances.push(parseFloat(el.balance.replace('$', '').replace(',','')))
 })    
    let averages =_.reduce(balances, (a,b) => a + b);
    return averages / array.length;
}

var firstLetterCount = function(array, letter){
    let coustomers = []
    
    _.each(array, function(el){
        coustomers.push(el.name.toLowerCase())
    })
    let count = 0
    _.each(coustomers,function(el){
        if (el.startsWith(letter.toLowerCase())){
            count++
        }
    })
    return count
}

var friendFirstLetterCount = function(array, customer, letter){
        let friends = [];
    
    _.each(array, function(el){
        if(el.name === customer){
            customer = el;
        }
    });
    
    _.each(customer.friends, function(el){
        friends.push(el.name.toLowerCase());
    });
    
    let count = 0;
    
    _.each(friends, function(el){
        if(el.startsWith(letter.toLowerCase())){
            count++;
        }
    });
    
    return count;
}

var friendsCount = function(array, name){
let result = []
    _.each(array, function(el){
        _.each(el.friends,function(el2){
            if(el2.name.includes(name)){
               result.push(el.name) 
            }
        })
        
    })
    return result
}
//!!!//
var topThreeTags = function(array){
    //Array of arrays
    let top3 = _.reduce(array, function(acc, customer){
        acc.push(customer.tags);
        return acc;
    }, []);
    
    //Merges all the tags arrays into one array
    top3 = top3.concat.apply([], top3);
    
    //Gets the 3 highest occuring elements
    top3 = top3.sort((a,b) =>
          _.filter(top3, v => v === a).length
        - _.filter(top3, v => v === b).length
    ).splice(-3);

    return top3;
};

//!!! need reduce version!!!
// var genderCount = function(array){
//     var result ={
//         "male": 0,
//         "female": 0,
//         "non-binary": 0
//     }
//     var males = 0
//     var females = 0
//     var nonbinary = 0
        
//     _.each(array, function(el){
//         if(el.gender === 'male'){
//             males++
//         }else if(el.gender === 'female'){
//             females++
//         }else if (el.gender === 'non-binary'){
//             nonbinary++
//         }
//     })    
//     result.male=males
//     result.female=females
//     result["non-binary"]=nonbinary
//     return result
// }

var genderCount = function(array){
    return _.reduce(array, (acc, customer) => (acc[customer.gender] = ++acc[customer.gender] || 1, acc), {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
