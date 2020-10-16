/**
 * Dashboard
 */

import { initFirebase } from './firebase.js';
import { createRandomProductCardData, ProductCard } from '../lib/ProductCard.js';

let productCards = [];

/**
 * Init the dashboard
 */
const initDashboard = async () => {
  initFirebase(); // init firebase

  // load products from database
  const products = await getProducts();
  products.forEach((product) => {
    addProductCardDOMElement(product);
  });

  // add event handler to add card
  document.getElementById('btnAddProductCard').addEventListener('click', btnAddProductCardClick);

  // add event handlers to logout button
  document.getElementById('btnLogout').addEventListener('click', logout);

  // when we are logged in or not...
  firebase.auth().onAuthStateChanged(onAuthStateChanged);
}

/**
 * Add Product Card DOM Element
 * @param {} cardData
 */
const addProductCardDOMElement = (cardData) => {
  // create a new card
  const productCard = new ProductCard(
    cardData,
    (id, newName) => editProduct(id, newName),
    (id) => deleteProduct(id)
  );

  // add to internal array
  productCards.push(productCard);

  // get the articles container
  const articlesContainer = document.getElementById('articles-container');

  // add the card to DOM
  articlesContainer.appendChild(productCard.render());
}

/**
 * When we click the add product card link
 */
const btnAddProductCardClick = async (e) => {
  e.preventDefault();
  const productCardData = await createProduct(createRandomProductCardData());
  addProductCardDOMElement(productCardData);
}

// -------
// FIREBASE - CRUD
// -------

/**
 * CREATE: A New Product Card
 */
const createProduct = async (cardData) => {
  // get a new firestore instance
  const db = firebase.firestore();

  // add created data
  const { serverTimestamp } = firebase.firestore.FieldValue;
  cardData.createdOn = serverTimestamp();

  // add product to firebase
  const docRef = await db.collection('products').add(cardData);

  // return the object with the added id
  return { ...cardData, id: docRef.id };
}

/**
 * READ: Get Products From Firebase
 */

const getProducts = async () => {
  // get firestore
  const db = firebase.firestore();

  // define the query
  const query = db.collection('products')
                  //.where('productPrice', '>', 0)
                  .orderBy('createdOn', 'asc');

  // get the query snapshot
  const querySnapshot = await query.get();

  // when data is changing...
  // or query.get()
  query.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((changed) => {
      if(changed.type !== "modified") return;
      const foundProductCard = productCards.find((productCard) => productCard.id === changed.doc.id);
      foundProductCard.updateName(changed.doc.data().productName);
    });
  });

  // loop over all documents
  return querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

/**
 * EDIT: Edits A Product From Firebase
 */
const editProduct = (id, newName) => {
  const db = firebase.firestore();
  db.collection('products').doc(id).update({ productName: newName});
}

/**
 * DELETE: Remove A Product From Firestore
 * @param {*} id
 */
const deleteProduct = (id) => {
  const db = firebase.firestore();
  productCards = productCards.filter((card) => card.id !== id);
  db.collection('products').doc(id).delete();
}

// -------
// FIREBASE - LOGOUT
// -------

/**
 * Logout with Firebase
 */
const logout = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

/**
 * When the authentication state changed
 * @param
 */
const onAuthStateChanged = (firebaseUser) => {
  if (!firebaseUser) location.replace("/index.html")
  else document.getElementById('appWrapper').classList.remove('hide');
};

window.addEventListener('load', initDashboard);