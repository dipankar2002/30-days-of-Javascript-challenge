/*
  Activity 4: Array Iteration :-
      Task 10: Use a 'for' loop to iterate over the array and log each element to the console.
      Task 11: Use the 'forEach' method to iterate over the array and log each element to the console.
*/

const arr = [1,2,3,4,5];

function forLoop() {
  console.log(`for loop`);
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
function forEach() {
  console.log(`forEach method`);
  arr.forEach((val) => {
    console.log(val);
  })
}

forLoop();
forEach();