/**
 * Firebase Hook
 */

import firebase from 'firebase/app';

export default () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
