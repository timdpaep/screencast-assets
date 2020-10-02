/**
 * A backpack object
 */

function Pack(capacity) {
  // properties
  this.capacity = capacity;
  this.contents = [];

  // methods
  this.add = function(value) {
    if(!this.isFull()) this.contents.push(value);
  }

  this.remove = function(value) {
    this.contents = this.contents.filter((item) => item !== value);
  }

  this.isEmpty = function() {
    return this.contents.length === 0;
  }

  this.isFull = function() {
    return this.contents.length >= this.capacity;
  }

  this.spaceLeft = function() {
    return this.capacity - this.contents.length;
  }

  this.getCapacity = function() {
    return this.capacity - this.contents.length;
  }

  this.toString = function() {
    let out = `Your pack has a capacity of ${this.capacity}. `;
    if(this.isEmpty()) out += 'Your pack is empty.';
    else out += `Your pack contains ${this.contents.length} item(s).`;
    return out;
  }
}

export { Pack };