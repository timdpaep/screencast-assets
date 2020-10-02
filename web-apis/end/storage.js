/**
 * The Storage API(s)
 * https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */

/**
 * LocalStorage
 */

// localStorage.setItem("localStorageString", "Hello LocalStorage!");
// const myString = localStorage.getItem("localStorageString");
// localStorage.removeItem("localStorageString");

/**
 * SessionStorage
 */

// sessionStorage.setItem("sessionStorageString", "Hello SessionStorage!");

/**
 * Storing an array in LocalStorage
 */

const geniuses  = [
  { id: 1, name: "Alan Turing" },
  { id: 2, name: "John Von Neumann" },
  { id: 3, name: "Ada Lovelace" }
]

/**
 * A function that will initialize the names
 */
const initNames = () => localStorage.setItem('geniuses', JSON.stringify(geniuses));

/**
 * A function that will change a name
 * @param {*} id The item of the item to change
 * @param {*} newName The new name of the item
 */
const changeName = (id, newName) => {
  // get the array
  const geniuses = localStorage.getItem('geniuses');

  // set a new array
  if(!geniuses) return;

  // parse to JSON
  const parsedGeniuses = JSON.parse(geniuses);

  // get the name on a certain id
  const updatedArray = parsedGeniuses.map(g => g.id === id ? { ...g, name: newName } : g);

  // set updated array
  localStorage.setItem('geniuses', JSON.stringify(updatedArray));
}

// initNames();
// changeName(2, "Sylvester Stallone");