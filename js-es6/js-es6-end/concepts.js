/**
 * Concepts
 */

/**
 * Modules
 */

import url, { MY_NAME as myName, MY_FAMILY_NAME } from './consts.js';

console.log(url);
//console.log(MY_NAME, MY_FAMILY_NAME);
console.log(myName);

/**
 * Hoisting
 */

// variables

// example 1
const a = 1;
console.log(a);

// example 2
console.log(b);
var b = 2;

// example 3
// console.log(c);

// how example 2 is read
var d;
console.log(d);
d = 1;

// functions

spinvis();
function spinvis() {
  console.log("Drink Wijn");
}

/*bobDylan();
const bobDylan = function() {
  console.log('Like a rolling stone');
}*/

/**
 * Timer
 */

// set a timeout
setTimeout(() => console.log("Where are we running?"), 2000);

// set timeout via function expression
const runner = () => console.log("I am running!");
setTimeout(runner, 1000);

// an interval
const myWorker = setInterval(() => console.log("Doing something!!!!!"), 1000);

// clear the interval
setTimeout(() => clearInterval(myWorker), 5000);