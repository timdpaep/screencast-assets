/**
 * My Main Application
 */

import { Pack } from './cfunctions/Pack.js';
import { Sword, Bottle } from './cfunctions/Sword.js';
import { Item } from './cfunctions/Item.js';

/**
 * Object literal
 */

const anObject = {
  firstName: "Tim"
}
console.log(anObject);

/**
 * Constructor functions
 */

// create a new pack
const myPack = new Pack(5);

// adds new values
myPack.add('New Value');
console.log(myPack.toString());
myPack.remove('New Value');
console.log(myPack.toString());

// create a new item
// const sword = new Item("Sword", 5);
const sword = new Sword();
console.log(sword);
console.log(sword.swing());
//console.log(sword.toString());

// const bottle = new Item("Bottle", 5);
const bottle = new Bottle();
console.log(bottle);
console.log(bottle.toString());
console.log(bottle.drink());

console.log(sword === bottle);
console.log(sword.__proto__ === bottle.__proto__);

console.log("Sword is instanceof Item?", sword instanceof Item);
console.log("Sword is instanceof Sword?", sword instanceof Sword);

/* const candy = new Item('candy', 2);
candy.toString = () => "I overwrite you **EVIL**";
console.log(candy); */