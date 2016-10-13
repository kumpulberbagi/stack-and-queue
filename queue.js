"use strict"

class Stack {
  constructor() {
    this.array = [];
    this.max = 10;
  }

  unshift(x) {
    return this.isFull() ? false : this.array.unshift(x);
  }

  shift() {
    return this.isFull() ? false: this.array.shift()
  }

  peek() {
    return this.array[this.array.length - 1]
  }

  isEmpty() {
    return this.array.length === 0 ? true : false;
  }

  isFull() {
    return this.array.length < this.max ? false : true;
  }
}
