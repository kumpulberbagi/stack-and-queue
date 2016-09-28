"use strict"

class Stack {
  constructor(property, limit) {
    this.name = property
    this.storage = []
    this.MAX_SIZE = limit || 10
  }

  push(x) {
    if(this.storage.length >= this.MAX_SIZE){
      console.log(`Stack ${this.name} are full. Push failed.`);
    } else {
      this.storage.push(x)
    }
  }

  pop() {
    if (this.storage == []){
      console.log(`Stack ${this.name} are already Empty !`);
    } else {
      this.storage.pop()
    }
  }

  peek() {
    console.log(`Latest data on ${this.name} : ` + this.storage[this.storage.length-1]);
  }

  isEmpty() {
    if(this.storage == []){
      console.log(`Stack ${this.name} are Empty !`);
    } else {
      console.log(`Stack ${this.name} are not Empty !`);
    }
  }

  isFull(){
    if(this.storage.length >= this.MAX_SIZE){
      console.log(`Stack ${this.name} are full. Push failed.`);
    }
  }
}

var toni = new Stack("Toni")
toni.push("test A")
toni.push("test B")
toni.push("test C")
toni.push("test D")
toni.push("test E")
toni.push("test F")
toni.push("test G")
toni.push("test H")
toni.push("test I")
toni.push("test J")
console.log(toni);
toni.push("test K")
toni.push("test L")
console.log(toni);
toni.pop()
console.log(toni);
toni.peek()
toni.isEmpty()
