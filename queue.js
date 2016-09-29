"use strict"

class Queue {
  constructor() {
     this.str = [];
     this.top = 0;
     this.max_size = 4;
  }

  push(x) {
    this.str.push(x)
    this.top +=1
  }

  shift() {
    return this.str.shift();
  }

  // peek() {
  //     return this.str.shift();
  // }


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


let my_queue = new Queue()

console.log(`the stack is empty? ${my_queue.isEmpty()}`)

my_queue.push("JavaScript")
my_queue.push("is Just so")
my_queue.push("cool")
my_queue.push(15)

console.log(my_queue.isFull())

//console.log(my_queue.peek())

console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())
console.log(my_queue.shift())

console.log(`The stack is empty? ${my_queue.isEmpty()}`)

console.log(my_queue.shift())
