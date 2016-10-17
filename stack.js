"use strict"

class Stack {
  constructor(data) {
    this.data = []
    this.maxSize = 18
  }

  push(x) {
    if (this.isFull() === "there is space") {
        this.data.push(x)
    }else {
        return console.log("data full")
    }
  }

  pop() {
    this.data.pop()
  }

  peek() {
    return this.data[this.data.length-1]
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
test.push(2)
test.push(3)
console.log(test.peek());
