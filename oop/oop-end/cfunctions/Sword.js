/**
 * The Sword and Bottle object
 */

import { Item } from './Item.js';

function Sword() {
  Item.call(this, "Sword", 4);

  this.swing = function() {
    return 'I am swinging the sword';
  }
}

function Bottle() {
  Item.call(this, "Bottle", 2);

  this.drink = function() {
    return 'I am drinking the bottle.';
  }
}

export { Sword, Bottle }