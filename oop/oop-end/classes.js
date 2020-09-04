/**
 * My Main Application
 */

import { Pack } from './classes/Pack.js';
import { Item } from './classes/Item.js';
import { Bottle, Sword } from './classes/Sword.js';

const myPack = new Pack(9);

// adds new values
myPack.add('New Value');
console.log(myPack.toString());
myPack.remove('New Value');
console.log(myPack.toString());

// creates a new item
// const sword = new Item("Sword", 5);
const sword = new Sword();
console.log(sword.swing());

const bottle = new Bottle();
console.log(bottle.drink());

console.log(sword.__proto__ === bottle.__proto__);
console.log("Sword is instanceof Item?", sword instanceof Item);
console.log("Sword is instanceof Sword?", sword instanceof Sword);

const item1 = new Item("item1", 3);
const item2 = new Item("item2", 2);

console.log(item1.__proto__ === item2.__proto__);

// adding items to the pack

myPack.add(sword);
myPack.add(bottle);

console.log(myPack.currentSpace);
console.log(myPack);