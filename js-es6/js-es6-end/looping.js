/**
 * Looping & High order functions
 */

/**
 * Looping
 */

const myLoopingArray = [ "one", "two", "three", { name: "Tim"} ];

// normal for loop
for(let i=0; i < myLoopingArray.length; i++) {
  console.log(myLoopingArray[i]);
}

// in
for(let index in myLoopingArray) {
  console.log(index);
}

// of
for (let obj of myLoopingArray) {
  console.log(obj);
}

// while
let i = 0;
while(i <= 10) {
  console.log(i);
  i++;
}

/**
 * Higher order array functions
 */

const myHighOrderArray = [ 4, 3, 1, 2, 6, 5 ];

// loops over every item (does not return an array)
myHighOrderArray.forEach((item) => {
  console.log("myItem: ", item);
});

// changes values, return new array
const mapArray = myHighOrderArray.map((item) => {
  return item + 10;
});
console.log(mapArray);

// check an item in array, return items that meets condition
const filterArray = myHighOrderArray.filter((item) => {
  return item > 2;
});
console.log(filterArray);

// reduce an array
const total = myHighOrderArray.reduce((total, currentNumber) => {
  return total + currentNumber;
});
console.log(total);

// includes
console.log(myHighOrderArray.includes(2));

// join
console.log(myHighOrderArray.join('//'));

// sort the array
// -1: does not win; put a to an index lower than b
// 1: does win; put a to a higher index than b
// 0: stays on this position; leave a & b unchanged
const sortedArray = myHighOrderArray.sort((a, b) => {
  /*if(a < b) return -1;
  if(a > b) return 1;
  return 0;*/
  return a - b;
});
console.log(sortedArray);