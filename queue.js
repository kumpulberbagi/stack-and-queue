"use strict"

class Queue {
  constructor(property, limit) {
    this._property = property;
    this._limit = limit || 10;
    this._datas = [];
  }

  push(x) {
    if (this._datas.length <= this._limit) {
      this._datas.push(x);
    }
    else {
      console.log('This stack is full! Cant push anymore!');
    }
    return "You've just push " + "'" + x + "'" + " to queues";
  }

  pop() {
    if (this._datas.length === 0) {
      console.log("There's no data left, nothing to delete!");
    }
    else {
      this._datas.splice(0, 1);
    }
    return "You've just pop the datas";
  }

  peek() {
    if (this._datas.length === 0) {
      return "There's no data be displayed!";
    }
    else {
      return this._datas[0];
    }
  }

  isEmpty() {
    if (this._datas.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

var my_queue = new Queue();

console.log(my_queue.push("Hello!"));
console.log(my_queue.push("Eat"));
console.log(my_queue.push("Pray"));
console.log(my_queue.push("Code"));

console.log(my_queue.peek());

console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());
console.log(my_queue.pop());

console.log(my_queue.peek());
console.log(my_queue.isEmpty());
