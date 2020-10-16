/**
 * Login
 */

import { initFirebase } from './firebase.js';

/**
 * Init the login page
 */
const initLogin = () => {
  initFirebase(); // init firebase

  // add event handlers to login button
  const btnLogin = document.getElementById('btnLogin');
  btnLogin.addEventListener('click', login);

  // add event handlers to Google button
  const btnLoginGoogle = document.getElementById('btnLoginGoogle');
  btnLoginGoogle.addEventListener('click', loginWithGoogle);

  // when we are logged in or not...
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
}

/**
 * When the authentication state changed
 * @param
 */
const onAuthStateChanged = (firebaseUser) => {
  if (firebaseUser) location.replace("/dashboard.html");
};

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
 * Login with Google
 * @param {*} e
 */
const loginWithGoogle = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .catch(showError);
}

/**
 * Login
 * @param {*} e
 */
const login = (e) => {
  e.preventDefault();
  const formData = new FormData(document.querySelector('form'));
  firebase.auth()
    .signInWithEmailAndPassword(formData.get('email'), formData.get('password'))
    .then(() => console.log('logged in'))
    .catch(showError);
}

// When the window is loaded
window.addEventListener('load', initLogin);

