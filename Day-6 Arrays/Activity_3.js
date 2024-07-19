/*
  Activity 3: Array Methods (Intermediate) :-
      Task 7: Use the 'map' method to create a new array where each number is doubled and log the new array.
      Task 8: Use the 'filter' method to create a new array with only even numbers and log the new array.
      Task 9: Use the 'reduce' method to calculate the sum of all numbers in the array and log the result.
*/

const arr = [1,2,3,4];

const newArrMap = arr.map((val) => {
  return val*2;
})
const newArrFilter = arr.filter((num) => {
  return num%2==0;
})
const newArrReduce = arr.reduce((pre,val) => {
  return pre+val;
})

console.log(`map method: ${newArrMap}\nfilter method: ${newArrFilter}\nreduce method: ${newArrReduce}`);