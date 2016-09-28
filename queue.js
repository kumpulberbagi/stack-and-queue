"use strict"

class Queue {
  constructor(a = []) {
    this._a = a
  }

  push(x) {
    this._a.push(x)
    return this
  }

  shift() {
    this._a.shift()
    return this
  }

  peek() {
    this._a.reverse().peek()
    return this.reverse()

  }

  isEmpty() {
    if (this._a.length === 0)
      return true
    else {
      return false
    }
  }
}
  let myQueue = new Queue()
  myQueue.push("Javascript")
  myQueue.push("is just so")
  myQueue.push("cool")
  myQueue.push("a")


  console.log(myQueue.shift())
  console.log(myQueue.shift())
  console.log(myQueue.shift())
  console.log(myQueue.shift())

  console.log(`The stack is empty? ${myQueue.isEmpty()}`)

  console.log(myQueue.shift())
