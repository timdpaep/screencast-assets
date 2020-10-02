/**
 * Our Pack object
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
    // validate
    if(!(item instanceof Item)) {
      throw new Error('This is not a valid item!');
    }

    // check if there is space left...
    if(this.currentSpace + item.size > this.capacity) {
      throw new Error('No space left...');
    }

    // adds to content
    this.contents.push(item);
  }

  remove(value) {
    this.contents = this.contents.filter((item) => item !== value);
  }

  isEmpty() {
    return this.contents.length === 0;
  }

  isFull() {
    return this.contents.length >= this.capacity;
  }

  spaceLeft() {
    return this.capacity - this.contents.length;
  }

  getCapacity() {
    return this.capacity - this.contents.length;
  }

  toString() {
    let out = `Your pack has a capacity of ${this.capacity}. `;
    if(this.isEmpty()) out += 'Your pack is empty.';
    else out += `Your pack contains ${this.contents.length} item(s).`;
    return out;
  }
}

export { Pack }