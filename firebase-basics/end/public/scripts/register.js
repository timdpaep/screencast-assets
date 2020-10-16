/**
 * Register
 */

import { initFirebase } from './firebase.js';

/**
 * Init the register page
 */
const initRegister = () => {
  // init firebase
  initFirebase();

  // add event handlers
  const btnRegister = document.getElementById('btnRegister');
  btnRegister.addEventListener('click', register);
}

/**
 * Show an error
 * @param {*} error
 */
const showError = ({ message }) => {
  if(!error) return;
  const errorContainer = document.querySelector('form .error-container');
  errorContainer.innerHTML = error;
  errorContainer.classList.remove('hide');
}

/**
 * Register in Firebase
 * @param {*} e
 */
const register = async (e) => {
  e.preventDefault();
  const username = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPassword').value;
  await firebase.auth()
    .createUserWithEmailAndPassword(username, password)
    .then(() => location.replace("/index.html"))
    .catch(showError)
}

// When the window is loaded
window.addEventListener('load', initRegister);