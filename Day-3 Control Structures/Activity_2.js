/*
  Activity 2: Nested If-Else Statements :-
      Task 3: Write a program to find the largest of three numbers using nested if-else statements.
*/

const a = 5;
const b = 20;
const c = 15;
let max = null;

if(a>b) {
  if(a>c) {
    max = a;
  } else {
    max = c;
  }
} else {
  if(b>c) {
    max = b;
  } else {
    max = c;
  }
}

console.log(`largest number is ${max}`);