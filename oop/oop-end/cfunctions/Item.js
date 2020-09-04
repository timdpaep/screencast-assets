/**
 * The Item Object
 */

function Item(name, size) {
  this.name = name;
  this.size = size;

  /*this.toString = function() {
    return `I am a ${this.name}. My size is ${this.size}.`;
  }*/
}

Item.prototype.toString = function() {
  return `I am a ${this.name}. My size is ${this.size}.`;
}

export { Item };