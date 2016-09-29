"use strict"

class Stack {
  constructor() {
     this.str = [];
     this.top = 0;
     this.max_size = 4;
  }

  push(x) {
    this.str.push(x)
    this.top +=1
  }

  pop() {
    return this.str.pop();
  }

  peek() {
      return this.str.shift();
  }


  isEmpty() {
    return this.str;
  }

  isFull(){
    var top = this.str.length
    if(this.top === this.max_size){
      return "Penuh"
    }else{
      return "Belum"
    }

  }

}


let my_stack = new Stack()

console.log(`the stack is empty? ${my_stack.isEmpty()}`)

my_stack.push("JavaScript")
my_stack.push("is Just so")
my_stack.push("cool")
my_stack.push(15)

console.log(my_stack.isFull())

console.log(my_stack.peek())

console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())

console.log(`The stack is empty? ${my_stack.isEmpty()}`)

console.log(my_stack.pop())
