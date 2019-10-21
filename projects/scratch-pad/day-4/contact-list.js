// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact= {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    };
  return contact;
} 


function makeContactList() {
   /*
    * You need something here to hold contacts. See length api for a hint:
    */
    var contacts = [];
   return {
       // we implemented the length api for you //
       length: function() {
           return contacts.length;
       }, // function declaration defines addContact as a function that takes in argument (contact)
       addContact: function(contact){
           //uses .push method to add (contact) to array literal set in var contacts
           contacts.push(contact);
       }, //declares findContact, takes (fullName) argument
       findContact: function(fullName){
           //compareFull takes (contact) argument
           function compareFull (contact){
               //returns the value of the key nameFirst and nameLast contacted with a space === fullName
               return (contact.nameFirst + " " + contact.nameLast) === fullName;
           } // returns the agrument (compareFull), from the oringal function, using the find method
           return contacts.find(compareFull);
       }, // declares removeContact, takes (contact) agrument
       removeContact: function(contact){
           // uses splice method on contacts with agruments of :the indexOf(contact) method and indexOf(contact) 
           //+1, indexOf(contact) is postion to add/remove items , indexOf(contact)+1 is element being removed
           contacts.splice(contacts.indexOf(contact), contacts.indexOf(contact) + 1);
       }, //defines printAllContactNames: function with no agurments
       printAllContactNames: function(){
           //sets var stringAll = ""; which is an array literal to hold the values in for loop
           var stringAll = "";
           //for loop sets i=0 as start, i< contacts.length -1 as conditiion, and increments by 1, ending at second to last index of contact
           for (var i = 0; i < contacts.length - 1; i++){
               //assins and adds the .nameFirst value from each interation of loop + space + nameLast value from each interation + /n which is a new line
               stringAll += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n";
           }
           // assigns and adds the same as above for last contact sans the new line
           stringAll += contacts[contacts.length -1].nameFirst + " " + contacts[contacts.length - 1].nameLast;
           
           return stringAll;
       }
   };
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
