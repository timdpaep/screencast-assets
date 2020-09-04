/**
 * Promises
 */

/**
 * A Checkout Process
 * 1. Charge the card
 * 2. Create an invoice
 * 3. Mail the invoice
 */

// ----
// Call Back Hell
// ----

/*const chargeCard = (callback) => setTimeout(callback, 2000);
const createInvoice = (callback) => setTimeout(callback, 1000);
const mailInvoice = (callback) => setTimeout(callback, 3000);

console.log('charging the card...');
chargeCard(() => {
  console.log('charged card.');
  console.log('creating invoice...');
  createInvoice(() => {
    console.log('invoice created.');
    console.log("mailing invoice...");
    mailInvoice(() => {
      console.log("invoice mailed!");
    });
  });
});*/

// ----
// Promises
// ----

const chargeCard = () => {
  return new Promise((resolve, reject) => {
    try {
      console.log('charging card...');
      setTimeout(() => {
        console.log('charged card.');
        resolve();
      }, 2000);
    }
    catch(err) { reject(err); }
  });
}
const createInvoice = () => {
  return new Promise((resolve, reject) => {
    try {
      console.log('creating invoice...');
      // throw new Error('Creating invoice went wrong.');
      setTimeout(() => {
        console.log('invoice created.');
        resolve();
      }, 1000);
    }
    catch(err) { reject(err); }
  });
}
const mailInvoice = () => {
  return new Promise((resolve, reject) => {
    try {
      console.log('mailing invoice...');
      setTimeout(() => {
        console.log('invoice mailed.');
        resolve();
      }, 3000);
    }
    catch(err) { reject(err); }
  });
}

/*chargeCard()
  .then(() => createInvoice())
  .then(() => mailInvoice())
  .catch((err) => console.log(err.message));*/

/*const asyncFunction = async () => {
  try
  {
    await chargeCard();
    await createInvoice();
    await mailInvoice();
  }
  catch(err)
  {
    console.log(err.message);
  }
}
asyncFunction();*/

/**
 * Promises All
 */

// create an array of promises
/*const promises = [
  chargeCard(),
  createInvoice(),
  mailInvoice(),
];

Promise.all(promises);*/

/**
 * Real Example
 */

async function getJoke() {
  const url = "https://icanhazdadjoke.com/";
  const response = await fetch(url, {
    headers: {
      'Accept': 'application/json'
    },
  });
  // pending/fulfilled(resolved)/rejected
  // console.log(response.json());
  const jokeJson = await response.json();
  return jokeJson.joke;
}

getJoke().then((joke) => console.log(joke));

/* setInterval(() => {
  getJoke().then((joke) => console.log(joke));
}, 2000); */
