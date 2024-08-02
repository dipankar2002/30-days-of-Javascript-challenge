/*
  Activity 1: Understanding Closures :-
      Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
      Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
*/

function outer() {
  const name = 'Gohan';
  function inner() {
    console.log(`name is ${name}`);
  }
  inner();
}
outer();

function counter() {
  let counter = 0;
  return {
    increment: () => {
      counter += 1;
       return`counter incremented`;
    },
    currentValue: () => {
      return counter;
    }
  }
}

const c = counter();
console.log( c.increment());
console.log( c.increment());
console.log( c.increment());
console.log( c.currentValue());
