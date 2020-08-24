/* eslint-disable no-console */
import './styles/main.css';

// eslint-disable-next-line no-console
console.log('Hello World!'); // eslint-disable-line no-console

// a test function
const test = () => {
  const testHello = 'hello';
  return testHello;
};

// an unused var
const t = test;

const changingValue = 0;
// eslint-disable-next-line no-const-assign
changingValue = 20;

changingValue = 400;

// do the test function
test();
