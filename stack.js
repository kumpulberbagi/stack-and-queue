"use strict"
const MAX_SIZE = 10;
class Stack {
	constructor() {
		this._arr = [];
		this._peek;
	}
	
	push(x) {
		//console.log(this.isFull());
		if(this.isFull() == 1){
			console.log("Array Is Full");
			return this;	
		}else{
			this._arr.push(x);
			return this;	
		}
	}
	
	pop() {
		this._arr.pop();
		return this;
	}
	
	peek() {
		this._peek = this._arr[this._arr.length-1];
		return this._peek;
	}
	
	isEmpty() {
		if(this._arr.length == 0){
			return 1;
		}else{
			return 0;
		}
	}
	
	isFull(){
		if(this._arr.length > MAX_SIZE){
			return 1;
		}else{
			return 0;
		}
	}
	
	result(){
		return this._arr; 
	}
}

let my_stack = new Stack();

console.log('The Stack Is Empty?' + my_stack.isEmpty());

console.log(my_stack.push("Javascript"));
//console.log(my_stack.pop());
console.log(my_stack.push("is so"));
console.log(my_stack.push("cool"));
console.log(my_stack.push("4").push("5"));
console.log(my_stack.push("6"));
console.log(my_stack.push("7"));
console.log(my_stack.push("8"));
console.log(my_stack.push("9"));
console.log(my_stack.push("10"));
console.log(my_stack.push("11"));

console.log(my_stack.push("ditolak").push("ditolak"));

console.log(my_stack.peek());
//console.log('The Stack Is Empty?' + my_stack.isEmpty());
//console.log(my_stack.isFull());
console.log(my_stack.result());