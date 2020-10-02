/**
 * The Classes
 */

import { Pack } from './classes/Pack.js';
import { Item } from './classes/Item.js';
import { Sword, Bottle } from './classes/Sword.js';

const myPack = new Pack(5);


const myItem = new Item('telephone', 2);
const myItem2 = new Item('map', 3);
console.log(myItem);

const mySword = new Sword();
const myBottle = new Bottle();
console.log(myBottle.toString());
console.log("Sword is instanceof Item?", mySword instanceof Item);
console.log("Sword is instanceof Sword?", mySword instanceof Sword);

console.log(mySword.__proto__ === myItem.__proto__);

myPack.add(mySword);
//myPack.add(myBottle);

console.log(myPack.currentSpace);