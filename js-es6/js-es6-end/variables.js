/**
 * Variables
 */

var paula = "Marckx";
var paula = "Merckx";

let beyonce = "Knowles";
beyonce = "Is a star";
// let beyonce = "Be a star";

const michelle = "Obama";
// michelle = "Trump";

/**
 * Object destructuring
 */

const me = {
  firstName: "Tim",
  lastName: "De Paepe",
  job: "Developer"
};

// old way
console.log(me.firstName);

// new way
var { firstName, lastName, job } = me;
// console.log(firstName + ' ' + lastName + ' is ' + job);
console.log(`${firstName} ${lastName} is ${job}`);

// spread operator
var { firstName, ...everythingElse } = me;
console.log(firstName);
console.log(everythingElse);

/**
 * Array destructuring
 */

const gameStats = [ 999, 998, 2, 45 ];
const [ first, second ] = gameStats;
console.log(first);
console.log(second);

/**
 * Variables in functions
 */

function calc(x, y=12) {
  return x + y;
}
console.log(calc(3));

function calc2(x, ...y) {
  //console.log(y);
  return x * y.length;
}
console.log(calc2(3, "test", 32));

function calc3(x, y, z) {
  return x + y + z;
}
console.log(calc3(...[1,2,3]));
