"use strict"
class Stack {
  constructor(a = []) {
    this._a = a

  }
  isFull(){
    if (this._a.length === 4){
       return true
    }
    else {
      return false
    }
  }
  push(x) {
    this._a.push(x)
    return this
  }

  pop() {
    this._a.pop()
    return this
  }

  peek() {
    this._a.peek()
    return this

  }

  isEmpty() {
    if (this._a.length === 0)
      return true
    else {
      return false
    }
  }
}

let myStack = new Stack()
myStack.push("Javascript")
myStack.push("is just so")
myStack.push("cool")
myStack.push("a")

console.log(`The stack is Full? ${myStack.isFull()}`)
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.pop())

console.log(`The stack is empty? ${myStack.isEmpty()}`)


console.log(myStack.pop())
console.log("---",myStack)
