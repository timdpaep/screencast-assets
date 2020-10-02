/**
 * The Fetch API
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */

/**
 * API URLS
 */

const POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/"
const POST_USERS_API = "https://reqres.in/api/users";

/**
 * Doing a simple GET Request with the pokemon API
 */

const getPokemon = async (name) => {
  // this fetch will be OK
  const response = await fetch(`${POKE_API_URL}${name}`);

  // console log the response
  // console.log(response);

  // validate if a response is OK
  if(!response.ok) throw new Error('The given response was not OK...');

  // get JSON data (this is a promise!)
  const users = await response.json();

  // return the users data
  return users;
}

// get the users
getPokemon('pikachu')
  .then((users) => console.log(users))
  .catch((e) => console.error(e.message));

/**
 * Doing a simple POST
 */

const createUser = async () => {
  // define a new user
  const user = {
    name: "morpheus",
    job: "leader"
  }

  // create a new fetch
  const response = await fetch(POST_USERS_API, {
    method: 'post',
    body: JSON.stringify(user), // body data type must match "Content-Type" header
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  // validate if a response is OK
  if(!response.ok) throw new Error('The given response was not OK...');

  // get JSON data (this is a promise!)
  const addedUser = await response.json();

  // return the users data
  return addedUser;
}

// create a new user
createUser()
  .then((user) => console.log(user))
  .catch((e) => console.error(e.message));
