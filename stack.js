"use strict"

class Stack {
  constructor(data) {
    this.data = []
    this.maxSize = 5
  }

  push(x) {
    if (this.isFull()==="there is space") {
        this.data.push(x)
    }else {
        console.log("data full")
    }
  }

  pop() {
    this.data.pop()
  }

  peek() {
    return this.data[this.data.length]
  }

  isEmpty() {
    if (this.data.length>0) {
      return "No"
    }else {
      return "yes"
    }
  }

  isFull(){
    if (this.data.length >= this.maxSize) {
      return "full"
    }else {
      return "there is space"
    }
  }

}

let test = new Stack()
test.push("aji")
test.push("lantang")
test.push(4)
test.push(5)
test.push(8)
test.push(8)
console.log(test.data);
