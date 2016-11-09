"use strict"

class Stack {
    constructor() {
        this.max = 4;
        this.arr = [];

    }

    push(x) {
        //Tambah Data Max 4
        if (this.arr.length < this.max) {
            this.arr.push(x);
            return `Tambah Data : ${x}`
        } else {
            return "Data Sudah Maximal"
        }
    }

    //For Stack LIFO
    pop() {
        //Hapus data dari belakang
        if (this.arr.length == 0) {
            return "Tidak Ada Data yang diHapus"
        } else {
            return `Hapus Data : ${this.arr.pop()}`
        }
    }

    //For Quenue FIFO
    peek() {
        //hapus data dari depan
        if (this.arr.length == 0) {
            return "Tidak Ada Data yang diHapus"
        } else {
            return `Hapus Data : ${this.arr.shift()}`
        }
    }

    isFull() {
        //stack sudah penuh
        if (this.arr.length == this.max) {
            return "Data Penuh"
        } else {
            return "Data Belum Penuh"
        }
    }

    isEmpty() {
        //stack kosong
        if (this.arr.length == 0) {
            return "Data Kosong"
        } else {
            return "Data Tidak Kosong"
        }
    }
}

// Buat stack baru
let my_stack = new Stack()
// cek apakah stack sudah ada isi atau kosong?
console.log(`The stack is empty? ${my_stack.isEmpty()}`)
// Tambahkan tiga
console.log(my_stack.push("JavaScript"))
console.log(my_stack.push("is just so"))
console.log(my_stack.push("cool"))
// Karna stack menggunakan array,
// kita bisa add tipe data apapun seperti string dan integer
console.log(my_stack.push(15))
// Lihat, kita menghapus data sata per satu
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
console.log(my_stack.pop())
// cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty? ${my_stack.isEmpty()}`)
// Coba hapus stack kosong, apa yang terjadi?
console.log(my_stack.pop())
