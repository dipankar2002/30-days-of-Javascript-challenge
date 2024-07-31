/*
  Activity 1: Basic Error Handling with Try-Catch :-
      Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
      Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
*/

// task 1
const err_1 = () => {
  try {
    // let sum = 2 + 5;
    console.log(sum);
  } catch(error) {
    console.log(`error found ${error}`);
  }
}
err_1();

const err_2 = (a,b) => {
  try {
    if(b === 0) {
      throw new Error(`Cannot divide by zero`);
    }
    console.log(a/b);
  } catch(err) {
    console.log(`error found: ${err.message}`);
  }
}
err_2(4,2);
err_2(4,0);