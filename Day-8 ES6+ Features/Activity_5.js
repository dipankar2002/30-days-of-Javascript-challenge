/*
  Activity 5: Enhanced Object Literals :-
      Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
      Task 9: Create an object with computed property names based on variables and log the object to the console.
*/

let Name = 'dip';
let Age = 21;
let obj = {Name,Age,dob() {return `15.11.2002`}};

console.log(obj);