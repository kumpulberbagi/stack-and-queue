"use strict"
"use strict"
class Queue {
  constructor() {
    this.isKosong = true
    this.max_value = 10
    this.tampungStack = []
  }

  push(x) {
    if(this.isKosong){
    this.tampungStack.push(x)
  }else return this.isFull()
  }

  pop() {
    if(this.isKosong){
    this.tampungStack.shift()
  }else return this.isFull()
  }

  peek() {
    console.log(this.tampungStack);
  }

  isEmpty() {
    if(this.tampungStack.length < this.max_value)
    {
      this.isKosong = true
    }else{
      this.isKosong = false
      return this.tampungStack
    }
  }

  isFull()  {
      if(this.tampungStack.length >= this.max_value)
      {
        console.log('The stack is already full !');
        console.log('Your stack length already reach max which is ');
      }
  }
}

var stack = new Queue()
stack.isEmpty()
stack.push('javascript')
stack.push('is')
stack.push('cool')
stack.push('javascript')
stack.pop()//pop first in first out
stack.peek()
stack.isFull()
