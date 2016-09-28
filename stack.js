"use strict"

class Stack {
  constructor(property, limit) {
    this._property = property;
    this._limit = limit || 10;
    this._datas = []
  }

  push(x) {
    if (this._datas.length <= this._limit) {
      this._datas.push(x);
    }
    else {
      console.log('This stack is full! Cant push anymore!');
    }
    return "You've just push " + "'" + x + "'" + " to datas";
  }

  pop() {
    if (this._datas.length === 0) {
      console.log("There's no data left, nothing to delete!");
    }
    else {
      this._datas.splice(this._datas.length-1, 1);
    }
    return "You've just pop the datas";
  }

  peek() {
    if (this._datas.length === 0) {
      return "There's no data be displayed!";
    }
    else {
      return this._datas[this._datas.length-1];
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

var my_stack = new Stack();

console.log(my_stack.push("Hello!"));
console.log(my_stack.push("Eat"));
console.log(my_stack.push("Pray"));
console.log(my_stack.push("Code"));

//console.log(my_stack.peek());

console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());

console.log(my_stack.peek());
console.log(my_stack.isEmpty());
