"use strict"

class Queue {
  constructor(property, limit) {
    this.name = property
    this.storage = []
    this.MAX_SIZE = limit || 10
  }

  push(x) {
    if(this.storage.length >= this.MAX_SIZE){
      console.log(`Queue ${this.name} are full. Push failed.`);
    } else {
      this.storage.reverse()
      this.storage.push(x)
      this.storage.reverse()
    }
  }

  pop() {
    if (this.storage == []){
      console.log(`Queue ${this.name} are already Empty !`);
    } else {
      this.storage.pop()
    }
  }

  peek() {
    console.log(`Latest data on ${this.name} : ` + this.storage[0]);
  }

  isEmpty() {
    if(this.storage == []){
      console.log(`Queue ${this.name} are Empty !`);
    } else {
      console.log(`Queue ${this.name} are not Empty !`);
    }
  }

  isFull(){
    if(this.storage.length >= this.MAX_SIZE){
      console.log(`Queue ${this.name} are full. Push failed.`);
    }
  }
}

var fox = new Queue("Fox")
fox.push("test A")
fox.push("test B")
fox.push("test C")
fox.push("test D")
fox.push("test E")
fox.push("test F")
fox.push("test G")
fox.push("test H")
fox.push("test I")
fox.push("test J")
console.log(fox);
fox.push("test K")
fox.push("test L")
console.log(fox);
fox.pop()
console.log(fox);
fox.peek()
fox.isEmpty()
