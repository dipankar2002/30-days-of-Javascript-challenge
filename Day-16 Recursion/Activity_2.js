/*
  Activity 2: Recursion with Arrays :-
      Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.
      Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
*/

let arr = [1,4,5];

function sum(arr) {
  if(arr.length===0) {
    return "invalid";
  } else if(arr.length === 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}
console.log(sum(arr));

function maxArr(arr) {
  if(arr.length === 0) {
    return "invalid";
  } else if(arr.length === 1) {
    return arr[0];
  } else {
    return Math.max(arr[0], maxArr(arr.slice(1)));
  }
}

console.log(maxArr(arr));