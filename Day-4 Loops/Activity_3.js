/*
  Activity 3: Do...While Loop :-
      Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
      Task 6: Write a program to calculate the factorial of a number using a do...while loop.
*/

function num1to5() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while(i<=5);
}

function fact(num) {
  let i = num-1;
  do {
    num = num * i;
    i--;
  } while(i>0);
  console.log(`Factorial is: ${num}`);
}

num1to5();
fact(6);