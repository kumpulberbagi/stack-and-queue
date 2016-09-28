"use strict"

class Queue {
  constructor() {
    this.maxsize = 20;
    this.size = 0;
    this.item = []
  }

  push(x) {
    if (this.size === this.maxsize) {
      return "penuh"
    }
    this.size = this.size + 1
    return this.item.push(x);
  }

  shift() {
    if (this.size === 0){
      return "sudah kosong"
    }
    this.size = this.size - 1
    return this.item.shift();
  }

  peek() {
    if (this.size === 0){
      return "item kosong"
    }
    return this.item[0]
  }

  isEmpty() {
    if (this.size === 0){
      return "kosong bro"
    } else {
      return "isi kok masih"
    }
  }
}

let my_queue = new Queue()

console.log(my_queue.isEmpty())
my_queue.push("JavaScript")
my_queue.push("is just so")
my_queue.push("cool")
my_queue.push(15)
console.log(my_queue.peek())
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.shift());
console.log(my_queue.isEmpty())
console.log(my_queue.shift());
