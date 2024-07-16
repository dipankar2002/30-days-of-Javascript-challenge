/*
  Activity 2: While Loop :-
      Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
      Task 4: Write a program to print numbers from 10 to 1 using a while loop.
*/

function sum() {
  let i = 1;
  let sum = 1;
  while(i <= 10) {
    sum = sum + i;
    i++;
  }
  console.log(`sum is: ${sum}`);
}

function num10to1() {
  let i = 10;
  while(i>0) {
    console.log(i);
    i--;
  }
}

sum();
num10to1();