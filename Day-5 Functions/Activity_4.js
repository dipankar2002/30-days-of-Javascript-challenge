/*
  Activity 4: Function Parameters and Default Values :-
      Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
      Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
*/

function product(a,b=3) {
  return a*b;
}
function message(name,age=21) {
  return `hello ${name}, happy ${21}th birthday`;
}

console.log(`product is: ${product(2)}`);
console.log(`Greeting message: ${message("Gohan")}`);