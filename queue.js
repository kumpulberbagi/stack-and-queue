"use strict"

class Queue {
  constructor() {
    this._arr = [];
    this.MAX_SIZE = 10;
  }
  push(x){
    if(this._arr.length < this.MAX_SIZE){
      this._arr.push(x)
    }
  }
  pop(){
    this._arr.shift()
    return this
  }
  isEmpty() {
      if(this._arr.length < 1){
        return 'empty'
      }
  }

}
let my_stack = new Queue();
// console.log(`The stack is empty?${my_stack.isEmpty()}`);
  //
  my_stack.push("1");
  my_stack.push("2");
  my_stack.push("3");
  my_stack.push("4");
  my_stack.push("5");
  my_stack.push("6");
  my_stack.push("7");
  my_stack.push("8");
  my_stack.push("9");
  my_stack.push("10");

  //
  // // my_stack.push(15);
  my_stack.pop();
  // my_stack.peek()

  console.log(my_stack._arr);
