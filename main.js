//A map can feel very similar to an object in JS.

//However, it doesn't have inheritance. No prototypes! 
//This makes it useful as a data storage.
new Map();

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

let familyUkwuoma = new Map();
familyUkwuoma.set(1, "The Runner-first");
familyUkwuoma.set(2, "The Runner-second");
familyUkwuoma.set(3, "The Runner-third");


console.log(familyUkwuoma);


//To get a specific value, you need to use the get() method. For example: 
familyUkwuoma.get(1);// The Runner-first



//Working with Sets in JavaScript

/*A set is a collection of unique values.

To build a new set, you can use the Set constructor:*/


//new Set();

/*The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.

*/

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

