/*
  Activity 1: If-Else Statements :-
      Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
      Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
*/

function checkNum(num) {
  if(num>0) {
    return "positive";
  } else if(num<0) {
    return "negative";
  } else {
    return "zero";
  }
}

function eligible(age) {
  if(age>=18) {
    return "eligible";
  } else {
    return "not eligible";
  }
}

console.log(`number is ${checkNum(5)}`);
console.log(`person ${eligible(21)} to vote`);