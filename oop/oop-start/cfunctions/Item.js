/**
 * An item
 */

function Item(name, size) {
  // properties
  this.name = name;
  this.size = size;

  // methods
  /*this.toString = function() {
    return `IN OBJ? I am a ${this.name}. My size is ${this.size}.`;
  }*/
}

Item.prototype.toString = function() {
  return `IN PROTOTYPE? I am a ${this.name}. My size is ${this.size}.`;
}

export { Item }