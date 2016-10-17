"use strict"

class Queue {
  constructor(data) {
    this.data = []
    this.maxSize = 5
  }

  enqueue(x) {
    if (this.isFull()==="there is space") {
        this.data.push(x)
    }else {
        console.log("data full")
    }
  }

  pop(){
    if (this.isEmpty()==="No") {
      this.data.splice(0,1)
    }else {
      console.log("data empty");
    }
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
var test = new Queue()
test.enqueue("aji")
test.enqueue("aji2")
test.enqueue("aji3")
test.enqueue("aji4")
test.pop()
console.log(test.data);
