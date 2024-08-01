/*
  Activity 3: Spread and Rest Operators :-
      Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
      Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
*/

const arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];

console.log(arr2);

const sum = (...nums) => {
  let s = 0;
  nums.map((val) => {
    s += val;
  });
  return s;
}
console.log(`sum is ${sum(1,2,3,4)}`);