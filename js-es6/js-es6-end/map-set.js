/**
 * Map/Set
 */

/**
 * Set
 */

// normal set
const myArray = [ 1, 2, 3, 4, 5 ];
const mySet = new Set(myArray);
console.log(myArray);
console.log(mySet);

// duplicates
const myArrayWithDuplicates = [ 1, 1, 2, 2, 2, 3, 4, 5 ];
const mySetWithoutDuplicates = new Set(myArrayWithDuplicates);
console.log(myArrayWithDuplicates);
console.log(mySetWithoutDuplicates);

// unique
const uniqueArray = [ ...mySetWithoutDuplicates ];
console.log(uniqueArray);

// methods
mySet.add({ firstName: "Tim"}); // primitive or objects,..
mySet.add(['newEntry', 'newestEntry']);
console.log(mySet);
mySet.delete(2);
console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.size);
mySet.clear();
console.log(mySet);

// Array is an ordered list
// Set is unordered
// Verschil tussen Array & Set? Er zijn geen duplicaten in de array!

console.log(myArray[1]);
console.log(mySet[1]);

/**
 * Map
 */

const myMap = new Map([[1, "one"], [2, "two"]]);
console.log(myMap);

// This solves...
const one = {};
const two = {};
const myObject = {};
myObject[one] = 1;
myObject[two] = 2;
console.log(myObject);
const numberMap = new Map([[one, "one"], [two, "two"]]);
console.log(numberMap);

// methods

// set
myMap.set(3, 'three');
console.log(myMap);
myMap.set(3, 'test');
console.log(myMap);

// get
console.log(myMap.get(1));

// delete
myMap.delete(2);
console.log(myMap);

// has
console.log(myMap.has(2));

// size
console.log(myMap.size);

// clear
myMap.clear();
console.log(myMap);
