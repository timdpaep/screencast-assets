/**
 * The Firebase Config
 */

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

const initFirebase = () => {
  firebase.initializeApp(firebaseConfig);
}

export { initFirebase }