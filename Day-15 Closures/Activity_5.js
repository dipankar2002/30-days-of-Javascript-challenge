/*
  Activity 5: Memoization :-
      Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
      Task 8: Create a memoized version of a function that calculates the factorial of a number.
*/

function memoizesFnc(fn) {
  let obj = {};
  return (...args) => {
    console.log(obj);
    const key  = JSON.stringify(args);
    if(obj[key]) {
      console.log(`Fetching from cache for args: ${args}`);
      return obj[key];
    } else {
      console.log(`Computing answer for args: ${args}`);
      const ans = fn(...args);
      obj[key] = ans;
      return ans;
    }
  }
}

function add(n1,n2) {
  return n1+n2;
}
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n-1);
}

const resultAdd = memoizesFnc(add);
const resultFact = memoizesFnc(factorial);

console.log(`task 1`);
console.log(resultAdd(1,2));
console.log(resultAdd(1,2));
console.log(resultAdd(5,15));

console.log(`task 2`);
console.log(resultFact(5));
console.log(resultFact(6));
console.log(resultFact(8));

