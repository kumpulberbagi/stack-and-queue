"use strict"

class Stack {
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

let my_stack = new Stack();

console.log(`The stack is empty? ${my_stack.isEmpty()}`);

my_stack.push("JavaScript");
my_stack.push("is just so");
my_stack.push("cool");
my_stack.push("play");
my_stack.push("is also");
my_stack.push("cool");
console.log(`The stack is full? ${my_stack.isFull()}`);

console.log(my_stack[3]);
my_stack.push(15);
//
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(`The stack is empty? ${my_stack.isEmpty()}`);

console.log(my_stack.pop());

