/**
 * My Item
 */

class Item {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  toString() {
    return `I am a ${this.name}. My size is ${this.size}.`;
  }
}

export { Item }