"use strict"

class Queue {
    constructor() {
      this.wadah = []
      this.MAX_SIZE = 5
      }

    masuk(x) {
      if(this.wadah.length === 5){
        this.isFull();
      }
      else{
        this.wadah.unshift(x);
      }
    }

    keluar() {
      this.wadah.pop();
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

    isi() {
      return "Ada "+this.wadah.length+ " buah"
    }

    isFull(){
      console.log("Sudah Penuhh!!");
    }
  }

  var buah = new Queue();
  buah.masuk("Apel");
  buah.masuk("Jambu");
  buah.masuk("Pisang");
  buah.masuk("Mangga");
  buah.masuk("Anggur");

  console.log(buah.isi());
  console.log(buah.peek());
  console.log(buah.isEmpty());
