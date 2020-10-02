/**
 * My Cfunctions appliction
 */

import { Pack } from './cfunctions/Pack.js';
import { Item } from './cfunctions/Item.js';
import { Sword, Bottle } from './cfunctions/Sword.js';

/**
 * Object literal
 */

const obj = {
  firstName: "Tim",
  lastName: "De Paepe"
}
console.log(obj);

/**
 * Constructor functions
 */

const sword = new Sword();
const bottle = new Bottle();

console.log(sword);
console.log(bottle);

console.log("Sword is an instanceof Item?", sword instanceof Item);
console.log("Sword is an instanceof Item?", sword instanceof Sword);

const item = new Item('Telephone', 2);
const item2 = new Item('Toy', 4);

console.log(item.toString());
console.log(item2.toString());

console.log(item.__proto__ === item2.__proto__);

const myPack = new Pack(5);
const myPack2 = new Pack(5);

console.log(myPack.toString());
myPack.add("A new item");
console.log(myPack2.toString());
myPack2.add("Another new item");

console.log(myPack);
console.log(myPack2);


