/*
  Activity 4: Default Parameters :-
      Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
*/

const fn1 = (a,b) => {
  return a*b;
}
const fn2 = (a,b=5) => {
  return a*b;
}

console.log(`fn1 is: ${fn1(2,10)}\nfn2 is: ${fn2(2,5)}`);