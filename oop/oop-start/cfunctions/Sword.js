/**
 * A sword
 */

import { Item } from './Item.js';

function Sword() {
  Item.call(this, "Sword", 3);

  this.swing = function() {
    return 'I am swinging my sword';
  }
}

function Bottle() {
  Item.call(this, "Bottle", 1);

  this.drink = function() {
    return 'I am drinking my bottle';
  }
}

export { Sword, Bottle }
