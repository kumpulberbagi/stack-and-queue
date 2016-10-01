"use strict"

class Stack {
  constructor() {
    this.tampung = []; //new Array();
    this.SIZE_MAX = 10;
  }

  push(x) {

    if(this.tampung.length === this.SIZE_MAX){
      this.isFull();
    }else{
      this.tampung.push(x);
    }

  }

  pop() {
    this.tampung.pop();
  }

  peek() {

    if(this.tampung == 0){
      return "tidak ada sesuatu di keranjang";
    }else{
      return this.tampung[this.tampung.length - 1]
    }

  }

  isEmpty() {

    if(this.tampung == 0){
      return true;
    }else{
      return false;
    }

  }

  isFull(){

    console.log("Keranjang sudah penuh")

  }

}

let my_stack = new Stack();

my_stack.push("hallo world");
my_stack.push("hallo world 2");
my_stack.push("hallo world 3");
my_stack.push("hallo world 3");
my_stack.push("hallo world 3");
my_stack.push(777);
my_stack.push(999)


console.log(my_stack.tampung);
console.log("array : " + my_stack.peek());
