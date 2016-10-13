"use strict"

export class Stack {
  constructor() {
    this.array = [];
    this.max = 10;
  }

  push(x) {
    return this.isFull() ? false : this.array.push(x);
  }

  pop() {
    return this.isFull() ? false: this.array.pop()
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
