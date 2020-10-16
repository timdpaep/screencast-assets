/**
 * Dashboard
 */

import { createRandomProductCardData, ProductCard } from '../lib/ProductCard.js';

let productCards = [];

/**
 * Init the dashboard
 */
const initDashboard = async () => {
  // add event handler to add card
  document.getElementById('btnAddProductCard').addEventListener('click', btnAddProductCardClick);

  // add event handlers to logout button
  document.getElementById('btnLogout').addEventListener('click', logout);
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
const btnAddProductCardClick = (e) => {
  e.preventDefault();
  const productCardData = createRandomProductCardData();
  addProductCardDOMElement(productCardData);
}

// -------
// FIREBASE - CRUD
// -------

/**
 * CREATE: A New Product Card
 */
const createProduct = async (cardData) => {
  // TO DO...
}

/**
 * READ: Get Products From Firebase
 */

const getProducts = async () => {
  // TO DO...
}

/**
 * EDIT: Edits A Product From Firebase
 */
const editProduct = (id, newName) => {
  // TO DO...
}

/**
 * DELETE: Remove A Product From Firestore
 * @param {*} id
 */
const deleteProduct = (id) => {
  // TO DO...
}

// -------
// FIREBASE - LOGOUT
// -------

/**
 * Logout with Firebase
 */
const logout = (e) => {
 // TO DO
}

window.addEventListener('load', initDashboard);