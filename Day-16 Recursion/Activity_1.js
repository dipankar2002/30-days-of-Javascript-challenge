/*
  Activity 1: Basic Recursion :-
      Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
      Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
*/

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(6));

function fibonacci(n) {
  if (n <= 0) {
      return "Invalid input";  // Edge case: Fibonacci numbers are defined for n >= 1
  } else if (n === 1) {
      return 0;
  } else if (n === 2) {
      return 1;
  } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`${fibonacci(i)}`);
}