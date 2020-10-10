/**
 * FormData
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */


const login = (e) => {
  e.preventDefault(); // prevents the default behaviour
  const formData = new FormData(e.target);

  // GET
  // Returns the first value associated with a given key from within a FormData object.
  console.log(formData.get('username'));

  // VALUES
  // Returns an iterator allowing to go through all values  contained in this object.
  const values = formData.values(); // returns an iterable
  for(const value of values) console.log(value);
  // OR Array.from(formData.values()).forEach((v) => console.log(v));

  // APPEND
  // Appends a new value onto an existing key inside a FormData object,
  // or adds the key if it does not already exist.
  formData.append('secret', 'I Love My Little Pony');
  formData.append('secret', 'I Love Gremlins');
  console.log(formData.get('secret'));
  console.log(formData.getAll('secret'));

  // ENTRIES
  // Returns an iterator allowing to go through all key/value pairs contained in this object.
  for(const entry of formData.entries()) console.log(entry);

  // KEYS
  // Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
  for(const key of formData.keys()) console.log(key);

  // HAS
  // Returns a boolean stating whether a FormData object contains a certain key.
  console.log('I have the key username:', formData.has('username'));

  // SET
  // Sets a new value for an existing key inside a FormData object,
  // or adds the key/value if it does not already exist.
  formData.set('username', 'Marty Mcfly');
  console.log(formData.get('username'));

  // DELETE
  formData.delete('username');
  console.log(formData.get('username'));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loginForm').addEventListener('submit', login);
});

