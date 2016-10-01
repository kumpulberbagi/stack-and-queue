"use strict"

class Stack {
  constructor() {
    this.wadah = []
    this.MAX_SIZE = 5
    }

  push(x) {
    if(this.wadah.length === 5){
      this.isFull();
    }
    else{
      this.wadah.push(x);
    }
  }

  pop() {
    this.wadah.pop();
  }

  isi() {
    return "Ada "+this.wadah.length+ " buah"
  }

  peek() {
    let top = this.wadah[this.wadah.length-1]
    return top
  }

  isEmpty() {
    if(this.wadah.length===0){
      return "Wadah kosong gan.."
    }
    else {
      return "Wadah tidak kosong.."
    }
  }

  isFull(){
    console.log("Sudah Penuhh!!");
  }
}

var buah = new Stack();
buah.push("Apel");
buah.push("Jambu");
buah.push("Pisang");
buah.push("Mangga");
buah.push("Anggur");
buah.push("Semangka");

console.log(buah.wadah.length);
console.log(buah.peek());
console.log(buah.isEmpty());
