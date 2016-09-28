"use strict"


class Queue {
  constructor() {
    this._value = [];
  }

  push(x) {
    this._value.push(x);
    return this;
  }

  pop() {
    this._value.pop();
    return this;
  }

  shift() {
    this._value.shift();
    return this;
  }

  peek() {
    this._value.peek();
    return this;
  }

  isEmpty() {
    if(this._value == "") {
      return true;
    }
    else {
      return false;
    }
  }

  isFull() {
    if(this._value >= 3) {
      return true;
    }
    else {
      return false;
    }
  }


}

let my_queue = new Queue();

console.log(`The stack is empty? ${my_queue.isEmpty()}`);

my_queue.push("JavaScript");
my_queue.push("is just so");
my_queue.push("cool");
my_queue.push("web");
my_queue.push("is also");
my_queue.push("cool");

console.log(my_queue[3]);
my_queue.push(15);
//
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());

console.log(`The stack is empty? ${my_queue.isEmpty()}`);

console.log(my_queue.shift());

