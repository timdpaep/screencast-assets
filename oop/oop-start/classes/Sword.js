/**
 * Sword/Bottle object definition
 */

import { Item } from './Item.js';

class Sword extends Item {
  constructor() {
    super("Sword", 4);
  }

  toString() {
    return "I am a sword!"
  }
}

class Bottle extends Item {
  constructor() {
    super("Bottle", 2);
  }

  toString() {
    return "I am a bottle!"
  }
}

export { Sword, Bottle }