/**
 * Pack
 */

import { Item } from './Item.js';

 class Pack {
  constructor(capacity) {
    this.capacity = capacity;
    this.contents = [];
  }

  get currentSpace() {
    return this.contents.reduce((total, currentItem) => total += currentItem.size, 0);
  }

  add(item) {
    // check if incoming arg is an item
    if(!item instanceof Item) {
      throw new Error('This is not a valid item!');
    }

    // check if there is spaceleft...
    if(this.currentSpace + item.size > this.capacity) {
      throw new Error('No space left...');
    }

    // adds to content
    this.contents.push(item);
  }

  remove(item) {
    if(!item instanceof Item) {
      throw new Error('This is not a valid item!');
    }
    this.contents = this.contents.filter((currentItem) => item !== currentItem);
  }

  isEmpty() {
    return this.contents.length === 0;
  }

  getCapacity() {
    return this.capacity;
  }

  spaceLeft() {
    return this.capacity - this.currentSpace;
  }

  toString() {
    let out = `Your pack has a capacity of ${this.capacity}. `;
    if(this.isEmpty()) out += 'Your pack is empty.';
    else out += `Your pack contains ${this.contents.length} item(s).`;
    return out;
  }
 }

 export { Pack }