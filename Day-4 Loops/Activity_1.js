/*
  Activity 1: For Loop :-
      Task 1: Write a program to print numbers from 1 to 10 using a for loop.
      Task 2: Write a program to print the multiplication table of 5 using a for loop.
*/

function num1to10() {
  for(let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function table(num) {
  for(let i = 1; i <= 10; i++) {
    console.log(`${num}x${i} = ${i*num}`);
  }
}

num1to10();
table(5);