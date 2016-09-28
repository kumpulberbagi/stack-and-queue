"use strict"

class Queue {
	constructor() {
		this._arr = [];
	}
	
	push(x) {
		this._arr.push(x);
		return this;
	}
	
	pop() {
		this._arr.shift();
		return this;
	}
	
	isEmpty() {
		if(this._arr.length == 0){
			return "empty";
		}else{
			return "Ada isi";
		}
	}
	
	result(){
		return this._arr; 
	}
}

let queue = new Queue();

console.log('The Stack Is Empty?' + queue.isEmpty());

console.log(queue.push("Javascript"));
console.log(queue.push("is so"));
console.log(queue.pop());
console.log(queue.push("cool"));
console.log(queue.pop());
//console.log(my_stack.result());