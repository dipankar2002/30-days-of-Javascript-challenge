/*
  Activity 4: Nested Loops :-
      Task 7: Write a program to print a pattern using nested for loops:
              *
              * *
              * * *
              * * * *
              * * * * *
*/

function pattern(num) {
  for(let i = 0; i < num; i++) {
    for(let k = 0; k <= i; k++) {
      process.stdout.write(`* `);
    }
    console.log(``);
  }
}
pattern(5)