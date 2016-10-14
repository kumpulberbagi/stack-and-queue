"use strict"

class Stack {
  constructor() {
    this._arr=[];
    this.MAX_SIZE = 10;
  }

  push(x) {
    // console.log(this._arr.length);
    if (this._arr.length >= this.MAX_SIZE){
      this.isFull();
    }else{
      this._arr.push(x)
    }
  }

  pop() {
    if(this._arr.length > 1){
      this._arr.pop()
    }else{
      console.log("stack underflow");
    }
  }

  peek() {
    if(this._arr.length >1 ){
      this._arr.reverse()
      if(this._arr.length >1){
        this._arr.reverse()
      }
    }
  }

  isEmpty() {
      if(this._arr.length < 1){
        return 'empty'
      }
  }

  isFull(){
    // if(this._arr > this.MAX_SIZE){
      console.log( 'data penuh');
    // }
  }
}

let my_stack = new Stack();
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
  my_stack.push("11");
  my_stack.push("12");
  my_stack.push("13");

  //
  // // my_stack.push(15);
  // my_stack.pop();
  // my_stack.peek()

  console.log(my_stack._arr);
