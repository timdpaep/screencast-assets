/**
 * The Sword and Bottle object
 */

import { Item } from './Item.js';

class Sword extends Item {
  constructor() {
    super("Sword", 4);
  }

  swing() {
    return 'I am swinging the sword';
  }

  toString() {
    return `I am a sword. My size is ${this.size}.`;
  }
}

class Bottle extends Item {
  constructor() {
    super("Bottle", 2);
  }

  drink() {
    return 'I am drinking the bottle.';
  }

  toString() {
    return `I am a bottle. My size is ${this.size}.`;
  }
}

export { Sword, Bottle }