/*
  Activity 1: Function Declaration :-
      Task 1: Write a function to check if a number is even or odd and log the result to the console.
      Task 2: Write a function to calculate the square of a number and return the result.
*/

function checkOddEven(num) {
  if(num%2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
function squer(num) {
  return num * num;
}

console.log(`number is ${checkOddEven(5)}`);
console.log(`Square is ${squer(2)}`);