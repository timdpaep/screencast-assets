/**
 * Functions
 */

// function declaration
function sayHello() {
  console.log("Hello World!");
}
sayHello();

// function expression

// option 1
const sayMyName = function() {
  console.log("Destiny's Child");
}
sayMyName();

// option 2 (as a callback)
const workerFunction = function(callback) {
  callback();
}
workerFunction(function() {
  console.log('Working 9 to 5...');
});

/**
 * Arrow functions
 */

const terminator = () => {
  return "I'll be back";
}
console.log(terminator());

const terminator2 = () => "I'll be back";
console.log(terminator2());

const terminator3 = (myQuote) => ({ quote: myQuote });
console.log(terminator3("I'll be back"));

/**
 * This
 */

// function is part of global (window)

console.log(this);

function ringPhone() {
  console.log(this);
}
ringPhone();

// method is part of the object

const phone = {
  type: 'android',
  openApps: ['a', 'b', 'c'],
  start() {
    console.log("start", this);
  },
  showOpenApps() {
    this.openApps.forEach(function(app) {
      console.log(this.type, app);
    }, this);
  },
  openApp: () => {
    console.log(this);
  }
}

phone.start();

phone.stop = function() {
  console.log(this);
}
phone.stop();

phone.showOpenApps();

phone.openApp();

// change this in context via bind
const watch = {
  type: 'applewatch'
}
phone.start.bind(watch)();
