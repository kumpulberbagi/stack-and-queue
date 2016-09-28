"use strict"

class Stack {
  constructor() {
    this.maxsize = 20;
    this.top = 0;
    this.item = []
  }

  push(x) {
    if (this.top === this.maxsize) {
      return "penuh"
    }
    this.top = this.top + 1
    return this.item.push(x);
  }

  pop() {
    if (this.top === 0){
      return "sudah kosong"
    }
    this.top = this.top - 1
    return this.item.pop();
  }

  peek() {
    if (this.top === 0){
      return "item kosong"
    }
    return this.item[(this.top)-1]
  }

  isEmpty() {
    if (this.top === 0){
      return "kosong bro"
    } else {
      return "isi kok masih"
    }
  }
}

let my_stack = new Stack()

console.log(my_stack.isEmpty())
my_stack.push("JavaScript")
my_stack.push("is just so")
my_stack.push("cool")
my_stack.push(15)
console.log(my_stack.peek())
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.pop());
console.log(my_stack.isEmpty())
console.log(my_stack.pop());
