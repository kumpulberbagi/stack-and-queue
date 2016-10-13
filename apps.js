'use strict'

import {Stack} from './stack.js';
import {Queue} from './stack.js';

// create new stack
let my_stack = new Stack();
//check whether the stack is empty or not
console.log(`The stack is empty? ${my_stack.isEmpty()}`);

my_stack.push(15);
