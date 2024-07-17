/*
  Activity 5: Higher-Order Functions :-
      Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
      Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
*/


function fun1(num,dis) {
  let res = num * num;
  dis(res);
  dis(num+1);
  dis(num+2);
}
function display(n) {
  console.log(`number is ${n}`);
}
console.log(`Calling first function:`);
console.log(`${fun1(5,display)}\n`);

function show(num,s,c) {
  s(num);
  c(num);
}
function square(n) {
  console.log(`Square is ${n*n}`);
}
function cube(n) {
  console.log(`Cube is ${n*n*n}`);
}
console.log(`Calling Show function:`);
console.log(show(2,square,cube));